import * as https from 'https'
import * as http from 'http'
import * as fs from 'fs'

// OAuth client credentials for cloudcode-pa Gemini endpoint
// Store as GEMINI_CLIENT_ID / GEMINI_CLIENT_SECRET env vars or rely on defaults below
const CLIENT_ID = process.env.GEMINI_CLIENT_ID ?? '681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com'
const CLIENT_SECRET = process.env.GEMINI_CLIENT_SECRET ?? ''
const ENDPOINT = 'https://cloudcode-pa.googleapis.com/v1internal:generateContent'
const LOAD_ENDPOINT = 'https://cloudcode-pa.googleapis.com/v1internal:loadCodeAssist'
const CREDS_PATH = '/home/llm/.gemini-home/.gemini/oauth_creds.json'

// In-process token cache
let _accessToken: string | null = null
let _tokenExpiry = 0
let _projectId: string | null = null

function post(url: string, body: object, token?: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body)
    const u = new URL(url)
    const opts = {
      hostname: u.hostname, path: u.pathname + u.search, method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    }
    const req = (u.protocol === 'https:' ? https : http).request(opts, (res) => {
      let raw = ''
      res.on('data', (c) => raw += c)
      res.on('end', () => {
        try { resolve(JSON.parse(raw)) } catch { reject(new Error(`JSON parse failed: ${raw.slice(0, 200)}`)) }
      })
    })
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function refreshToken(): Promise<string> {
  // Try env var first (Vercel / production), then local creds file
  const refreshTok = process.env.GEMINI_REFRESH_TOKEN ||
    (() => {
      try { return JSON.parse(fs.readFileSync(CREDS_PATH, 'utf8')).refresh_token } catch { return null }
    })()

  if (!refreshTok) throw new Error('No GEMINI_REFRESH_TOKEN configured')

  const body = new URLSearchParams({
    client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
    refresh_token: refreshTok, grant_type: 'refresh_token',
  })
  const res = await new Promise<{ access_token: string; expires_in: number }>((resolve, reject) => {
    const data = body.toString()
    const req = https.request({
      hostname: 'oauth2.googleapis.com', path: '/token', method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(data) },
    }, (r) => {
      let raw = ''; r.on('data', c => raw += c); r.on('end', () => {
        try { resolve(JSON.parse(raw)) } catch { reject(new Error(raw)) }
      })
    })
    req.on('error', reject); req.write(data); req.end()
  })
  _accessToken = res.access_token
  _tokenExpiry = Date.now() + (res.expires_in - 60) * 1000
  return _accessToken
}

async function getToken(): Promise<string> {
  if (_accessToken && Date.now() < _tokenExpiry) return _accessToken
  return refreshToken()
}

async function getProject(token: string): Promise<string> {
  if (_projectId) return _projectId
  const res = await post(LOAD_ENDPOINT, {
    metadata: { ideType: 'IDE_UNSPECIFIED', platform: 'PLATFORM_UNSPECIFIED', pluginType: 'GEMINI' },
    cloudaicompanionProject: null,
  }, token) as { cloudaicompanionProject?: string }
  if (!res.cloudaicompanionProject) throw new Error('loadCodeAssist returned no project')
  _projectId = res.cloudaicompanionProject
  return _projectId
}

const SYSTEM_PROMPT = `Ты — ЗОРКО, тихий и внимательный управляющий малого бизнеса.
Ты никогда не спишь, смотришь на все данные и замечаешь то, что хозяин мог пропустить.
Твой голос — спокойный, конкретный, с заботой. Пишешь по-русски.
Стиль: будто умный опытный менеджер рассказывает хозяину в 9 утра, что важно сегодня.
Никакой воды, только факты и конкретные рекомендации.

Правила для whispers:
- sev: "warn" = риск/проблема, "good" = рост/позитив, "idea" = идея/возможность
- src: источник данных (Погода, Отзывы, Касса, Склад, Афиша, Карты, TG-чат, Календарь)
- msg: 1-2 предложения, конкретный факт + контекст
- meta: короткая метка (время, число, изменение)
- Генерируй 5-8 шёпотов на основе переданных данных
- В brief используй HTML-теги <em> для курсива и <span class="mark"> для выделения

Ответ строго в JSON:
{
  "brief": "HTML строка с описанием дня",
  "headline": "одна фраза-заголовок",
  "focus": {"title": "...", "body": "...", "deadline": "...", "meta": [{"k":"...","v":"..."}]},
  "whispers": [{"src":"...","msg":"...","meta":"...","sev":"warn|good|idea"}]
}`

export async function generateInsights(dataBundle: Record<string, unknown>) {
  const token = await getToken()
  const project = await getProject(token)

  const prompt = `Данные бизнеса:\n${JSON.stringify(dataBundle, null, 2)}\n\nСгенерируй утренние инсайты в JSON.`

  const body = {
    model: 'gemini-2.5-flash',
    project,
    request: {
      model: 'models/gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      generationConfig: { responseMimeType: 'application/json', temperature: 0.7 },
    },
  }

  const res = await post(ENDPOINT, body, token) as {
    response?: { candidates?: Array<{ content: { parts: Array<{ text: string }> } }> }
    error?: { message: string }
  }

  if (res.error) throw new Error(`Gemini error: ${res.error.message}`)
  const text = res.response?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error(`Empty Gemini response: ${JSON.stringify(res).slice(0, 200)}`)
  return JSON.parse(text) as {
    brief: string; headline: string
    focus: { title: string; body: string; deadline: string; meta: Array<{ k: string; v: string }> }
    whispers: Array<{ src: string; msg: string; meta: string; sev: string }>
  }
}
