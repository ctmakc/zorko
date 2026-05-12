import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'

let _client: GoogleGenerativeAI | null = null

function getClient() {
  if (!_client) _client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  return _client
}

const WHISPER_SCHEMA = {
  type: SchemaType.OBJECT,
  properties: {
    brief: { type: SchemaType.STRING },
    headline: { type: SchemaType.STRING },
    focus: {
      type: SchemaType.OBJECT,
      properties: {
        title: { type: SchemaType.STRING },
        body: { type: SchemaType.STRING },
        deadline: { type: SchemaType.STRING },
        meta: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            properties: {
              k: { type: SchemaType.STRING },
              v: { type: SchemaType.STRING },
            },
            required: ['k', 'v'],
          },
        },
      },
      required: ['title', 'body', 'deadline', 'meta'],
    },
    whispers: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          src: { type: SchemaType.STRING },
          msg: { type: SchemaType.STRING },
          meta: { type: SchemaType.STRING },
          sev: { type: SchemaType.STRING },
        },
        required: ['src', 'msg', 'meta', 'sev'],
      },
    },
  },
  required: ['brief', 'headline', 'focus', 'whispers'],
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
- В brief используй HTML-теги <em> для курсива и <span class="mark"> для выделения`

export async function generateInsights(dataBundle: Record<string, unknown>) {
  const model = getClient().getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: SYSTEM_PROMPT,
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: WHISPER_SCHEMA as Parameters<typeof model.generateContent>[0] extends { generationConfig?: { responseSchema?: infer S } } ? S : never,
    },
  })

  const prompt = `Данные бизнеса:\n${JSON.stringify(dataBundle, null, 2)}\n\nСгенерируй утренние инсайты.`
  const result = await model.generateContent(prompt)
  return JSON.parse(result.response.text())
}
