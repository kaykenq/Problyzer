export interface DataOptions {
  algorithm: number[]
  path: string | '../algorithms'
}

export interface AlgorithmsInterface {
  execute: (...args: unknown[]) => Promise<unknown>
}

export type Data =
  | Record<string | number, string | number | object>
  | Array<string | number | object>
