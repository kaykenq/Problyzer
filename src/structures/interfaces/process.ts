export interface ProcessResponse {
  type?: 'thread' | 'cluster' | undefined
  currentId?: number | null
  isMain?: boolean
  isRunning?: boolean
  cpusLength: number | 0
}

export interface ProcessOptions {
  ratherCluster: boolean | true
}
