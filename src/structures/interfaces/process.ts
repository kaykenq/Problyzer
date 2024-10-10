export interface ProcessResponse {
  type?: 'thread' | 'cluster' | undefined
  id?: number | null
  isMain?: boolean
  isRunning?: boolean
  cpusLength: number | 0
}
