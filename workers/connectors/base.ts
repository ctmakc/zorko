export interface ConnectorConfig {
  [key: string]: string
}

export interface ConnectorResult {
  raw: Record<string, unknown>
  isMock: boolean
}

export interface ConnectorDef {
  type: string
  requiredFields: string[]
  fetch(config: ConnectorConfig, city: string): Promise<ConnectorResult>
}

export const registry = new Map<string, ConnectorDef>()

export function registerConnector(c: ConnectorDef) {
  registry.set(c.type, c)
}
