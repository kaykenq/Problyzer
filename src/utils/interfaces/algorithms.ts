export interface Algorithm {
  name: string
  id: number | undefined
  description: string
  recommended: number
  auto: boolean
  version?: string | undefined
}

export interface AlgorithmInterface {
  execute: (...args: unknown[]) => Promise<unknown>
}
