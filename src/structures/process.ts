import Base from './bases/Base'
import Cluster from 'node:cluster'
import { availableParallelism } from 'node:os'
import { isMainThread } from 'node:worker_threads'
import { ProcessResponse } from './interfaces/process'

export default class Process extends Base {
  public info: ProcessResponse = {
    cpusLength: 0,
  }
  constructor(public options: unknown) {
    super('process')
    this.info.cpusLength = availableParallelism()
  }

  public recommended(
    data: Record<string | number, string | number> | Array<string | number>,
  ): void | number {
    if (!Cluster.isPrimary || !isMainThread) return
    if (!this.info.cpusLength) return 0
    const P = this.calculate(data)
    if (P <= 1) return 0
    else if (P > 1) return 1
  }

  private calculate(
    data: Record<string | number, string | number> | Array<string | number>,
  ): number {
    const n: number = Array.isArray(data)
      ? data.length
      : Object.values(data).length
    return n / this.info.cpusLength
  }
}
