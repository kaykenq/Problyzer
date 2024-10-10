export interface DataOptions {
  algorithm: number[]
  path: string | '../algorithms'
}

export interface AlgorithmsInterface {
  execute: (...args: unknown[]) => Promise<unknown>
}
