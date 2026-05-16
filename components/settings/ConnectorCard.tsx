'use client'
import { useState } from 'react'
import { UpgradeModal } from '@/components/billing/UpgradeModal'

interface Field { key: string; label: string; placeholder: string; required: boolean }
interface ConnectorDef {
  type: string
  label: string
  desc: string
  ready: boolean
  fields: Field[]
  connector: { id: string; enabled: boolean; config: Record<string, string>; last_synced_at: string | null; error: string | null } | null
}

export function ConnectorCard({ def, onSave }: { def: ConnectorDef; onSave: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const [config, setConfig] = useState<Record<string, string>>(def.connector?.config ?? {})
  const [enabled, setEnabled] = useState(def.connector?.enabled ?? false)
  const [saving, setSaving] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)

  const save = async () => {
    setSaving(true)
    const res = await fetch(`/api/connectors/${def.type}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ config, enabled }),
    })

    if (res.status === 403) {
      const body = await res.json()
      if (body.error === 'connector_limit') {
        setSaving(false)
        setShowUpgrade(true)
        return
      }
    }

    setSaving(false)
    setExpanded(false)
    onSave()
  }

  const statusColor = !def.connector ? 'var(--muted-2)' : def.connector.error ? 'var(--signal)' : def.connector.enabled ? 'var(--moss)' : 'var(--muted-2)'
  const statusText = !def.connector ? 'не подключён' : def.connector.error ? 'ошибка' : def.connector.enabled ? 'активен' : 'отключён'

  return (
    <>
      <div style={{ border: '1px solid var(--line)', background: 'var(--paper)', marginBottom: 0 }}>
        <div onClick={() => def.ready && setExpanded(e => !e)}
          style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, cursor: def.ready ? 'pointer' : 'default' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 15, color: 'var(--ink)' }}>{def.label}</span>
              {!def.ready && (
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', border: '1px solid var(--line)', color: 'var(--muted-2)' }}>Скоро</span>
              )}
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{def.desc}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: statusColor, display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: statusColor }}>{statusText}</span>
            {def.ready && <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>{expanded ? '▲' : '▼'}</span>}
          </div>
        </div>

        {expanded && def.ready && (
          <div style={{ borderTop: '1px solid var(--line)', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {def.fields.map(f => (
              <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {f.label}{f.required && ' *'}
                </label>
                <input
                  type={f.key.includes('key') || f.key.includes('token') ? 'password' : 'text'}
                  value={config[f.key] ?? ''}
                  onChange={e => setConfig(c => ({ ...c, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, padding: '8px 10px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)', outline: 'none', width: '100%' }}
                />
              </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
                Включить коннектор
              </label>
            </div>

            {def.connector?.last_synced_at && (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)' }}>
                Последняя синхронизация: {new Date(def.connector.last_synced_at).toLocaleString('ru-RU')}
              </div>
            )}
            {def.connector?.error && (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--signal)', padding: '6px 8px', border: '1px solid var(--signal)', background: 'rgba(217,65,14,0.04)' }}>
                Ошибка: {def.connector.error}
              </div>
            )}

            <div style={{ display: 'flex', gap: 8, paddingTop: 8 }}>
              <button onClick={save} disabled={saving}
                style={{ padding: '8px 16px', background: 'var(--ink)', color: 'var(--paper)', border: 'none', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.6 : 1 }}>
                {saving ? 'Сохраняю...' : 'Сохранить →'}
              </button>
              <button onClick={() => setExpanded(false)}
                style={{ padding: '8px 16px', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Отмена
              </button>
            </div>
          </div>
        )}
      </div>

      {showUpgrade && (
        <UpgradeModal onClose={() => setShowUpgrade(false)} reason="connector_limit" />
      )}
    </>
  )
}
