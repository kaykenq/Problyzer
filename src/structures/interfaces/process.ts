export interface ProcessResponse {
  type?: 'thread' | 'cluster' | undefined
  cpusLength: number | 0
  workers?: unknown[] | object | undefined
  id?: number | undefined
  [key: string]: string | number | object | undefined
}

export interface ProcessOptions {
  ratherCluster: boolean | true
}
