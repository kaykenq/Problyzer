import Base from './bases/Base'
import Cluster from 'node:cluster'
import { isMainThread } from 'node:worker_threads'
import { ProcessOptions, ProcessResponse } from '../utils/interfaces/process'

export default class Process extends Base {
  public info: ProcessResponse = {
    cpusLength: 0,
    workers: [],
  }
  constructor(public options: ProcessOptions) {
    super()
  }

  public recommended(
    data: Record<string | number, string | number> | Array<string | number>,
  ): Array<boolean | number> {
    return [
      !Cluster.isPrimary || !isMainThread,
      !this.info.cpusLength,
      this.calculate(data),
    ]
  }

  private calculate(
    data: Record<string | number, string | number> | Array<string | number>,
  ): number {
    const n: number = Array.isArray(data)
      ? data.length
      : Object.values(data).length
    return n / this.info.cpusLength
  }

  public setInfo(worker: ProcessResponse) {
    return (this.info = worker)
  }

  public appendWorkers(workers: object): unknown {
    if (!Array.isArray(this.info.workers)) return (this.info.workers = workers)

    return this.info.workers?.push(workers)
  }
}
