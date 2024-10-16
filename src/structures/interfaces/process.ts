export interface ProcessResponse {
  type?: 'thread' | 'cluster' | undefined
  cpusLength: number | 0
  workers?: object[]
  id?: number
  [key: string]: string | number | object | undefined
}

export interface ProcessOptions {
  ratherCluster: boolean | true
}
