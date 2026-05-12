'use client'
import { useState } from 'react'
import { Lens } from './Lens'
import type { Whisper, FocusCard, Brief } from '@/lib/types'

const S = {
  col: { padding: '24px 26px', borderRight: '1px solid var(--line)', minHeight: 0, display: 'flex', flexDirection: 'column' as const, gap: 14, overflow: 'auto' },
  colhead: { display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'var(--muted)', paddingBottom: 8, borderBottom: '1px dashed var(--line)' },
  ix: { color: 'var(--ink)', fontWeight: 500 },
  grow: { flex: 1 },
}

function BriefBlock({ brief }: { brief: Brief | null }) {
  const content = brief?.content ?? 'Данные загружаются...'
  return (
    <p style={{ fontFamily: 'var(--serif)', fontSize: 32, lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', fontWeight: 400 }}
      dangerouslySetInnerHTML={{ __html: content.replace(/<em>/g, '<em style="font-style:italic;color:var(--signal)">').replace(/<span class="mark">/g, '<span style="background:linear-gradient(transparent 62%,rgba(217,65,14,0.22) 62% 92%,transparent 92%);padding:0 2px">') }} />
  )
}

function FocusBlock({ focus, onAccept, onSkip }: { focus: FocusCard | null; onAccept: () => void; onSkip: () => void }) {
  if (!focus) return (
    <div style={{ border: '1px solid var(--line)', background: 'var(--paper)', padding: '32px 18px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--signal)' }}>Фокус принят</div>
      <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 22, lineHeight: 1.15, fontStyle: 'italic' }}>Хорошее зрение — половина дела.</h4>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>Я добавил это в задачи на 11:00. Если изменятся условия — шепну.</p>
    </div>
  )
  return (
    <div style={{ border: '1px solid var(--line)', background: 'var(--paper)', padding: 18, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', cursor: 'pointer' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--signal)' }}>{focus.tag}</div>
      <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{focus.title}</h4>
      <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{focus.body}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', paddingTop: 10, borderTop: '1px dashed var(--line)' }}>
        {focus.meta.map((m, i) => <span key={i}>{m.k}·<b style={{ color: 'var(--ink)', fontWeight: 500 }}>&nbsp;{m.v}</b></span>)}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <button onClick={onAccept} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer' }}>Принять →</button>
        <button onClick={onSkip} style={{ border: '1px solid var(--line)', background: 'transparent', color: 'var(--muted)', padding: '6px 10px', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' }}>Отложить</button>
      </div>
    </div>
  )
}

interface TodayViewProps {
  brief: Brief | null
  focus: FocusCard | null
  whispers: Whisper[]
  onFocusAction: (id: string, action: 'accept' | 'skip') => void
  onWhisperDismiss: (id: string, dismissed: boolean) => void
}

export function TodayView({ brief, focus, whispers, onFocusAction, onWhisperDismiss }: TodayViewProps) {
  const [filter, setFilter] = useState<'all' | 'warn' | 'good' | 'idea'>('all')
  const [localFocus, setLocalFocus] = useState(focus)

  const lensSignals = [
    { label: 'выручка', hot: true }, { label: 'чек', hot: false }, { label: 'чеки', hot: false },
    { label: 'рейтинг', hot: false }, { label: 'погода', hot: true }, { label: 'афиша', hot: true },
    { label: 'склад', hot: false }, { label: 'смена', hot: false },
    { label: 'отзывы', hot: false }, { label: 'tg', hot: false }, { label: 'карты', hot: false }, { label: 'tilling', hot: false },
  ]

  const filtered = filter === 'all' ? whispers : whispers.filter(w => w.sev === filter)
  const activeCount = filtered.filter(w => !w.dismissed).length

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.3fr 0.95fr', height: '100%', minHeight: 0 }}>
      {/* LEFT */}
      <div style={S.col}>
        <div style={S.colhead}>
          <span style={S.ix}>01</span> Бриф · сегодня
          <span style={S.grow} />
          <span suppressHydrationWarning>{typeof window !== 'undefined' ? new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : ''}</span>
        </div>
        <BriefBlock brief={brief} />
        <div style={{ display: 'flex', gap: 18, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
          <span>Смена <b style={{ color: 'var(--ink)', fontWeight: 500 }}>1284</b></span>
          <span>Бариста <b style={{ color: 'var(--ink)', fontWeight: 500 }}>Лена</b></span>
          <span>Погода <b style={{ color: 'var(--ink)', fontWeight: 500 }}>+9°</b></span>
        </div>
        <div style={{ ...S.colhead, marginTop: 8 }}><span style={S.ix}>02</span> Что сделать сейчас</div>
        <FocusBlock
          focus={localFocus}
          onAccept={() => { if (localFocus) { onFocusAction(localFocus.id, 'accept'); setLocalFocus(null) } }}
          onSkip={() => { if (localFocus) { onFocusAction(localFocus.id, 'skip'); setLocalFocus(null) } }}
        />
      </div>

      {/* CENTER: LENS */}
      <div style={{ padding: 0, position: 'relative', background: 'transparent', borderRight: '1px solid var(--line)', minHeight: 0 }}>
        <Lens value="+22" label="прогноз: чеки в окне 14:00–18:00" ctx="Солнце впервые за неделю. Терраса будет ловить." delta="вероятность 0.81" signals={lensSignals} />
      </div>

      {/* RIGHT: WHISPERS */}
      <div style={S.col}>
        <div style={S.colhead}>
          <span style={S.ix}>03</span> Шёпоты
          <span style={S.grow} />
          <span>{activeCount} активн.</span>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
          {(['all', 'warn', 'good', 'idea'] as const).map((k) => (
            <button key={k} onClick={() => setFilter(k)}
              style={{ background: filter === k ? 'var(--ink)' : 'transparent', border: '1px solid var(--line)', padding: '5px 9px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: filter === k ? 'var(--paper)' : 'var(--muted)', cursor: 'pointer', borderColor: filter === k ? 'var(--ink)' : 'var(--line)' }}>
              {k === 'all' ? 'все' : k === 'warn' ? 'риски' : k === 'good' ? 'рост' : 'идеи'}
            </button>
          ))}
        </div>
        <div>
          {filtered.map((w, i) => (
            <div key={w.id}
              onClick={() => onWhisperDismiss(w.id, !w.dismissed)}
              style={{ borderBottom: '1px solid var(--line)', padding: '14px 0', display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', opacity: w.dismissed ? 0.35 : 1 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', color: 'var(--muted-2)', minWidth: 24, paddingTop: 3 }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--signal)' }}>
                  {w.src} · {w.sev === 'warn' ? 'риск' : w.sev === 'good' ? 'рост' : 'идея'}
                </span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.28, letterSpacing: '-0.005em', color: 'var(--ink)', textDecoration: w.dismissed ? 'line-through' : 'none' }}>{w.msg}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>{w.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
