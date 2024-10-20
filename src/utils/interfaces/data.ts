export interface DataOptions {
  algorithm: number[]
  path: string | '../algorithms'
}

export type Data =
  | Record<string | number, string | number | object>
  | Array<string | number | object>
