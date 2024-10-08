import Base from "./bases/Base";
import { ProcessInterface } from "./interfaces/process";

export default class Process extends Base {
  public info: ProcessInterface
  constructor(options: any) {
    super('process')
    this.info.cpusLength = os.availbleParallelism()
  }
  
  public recommended(data: Record<string | number, string | number> | Array<string | number>): void | string {
    if(!cluster.isPrimary || !worker_threads.isMainThread) return;
    if(!this.info.cpusLength) return this.info.type = "thread"
    const P = this.calculate(data)
    if(P <= 1) this.info.type = "thread"
    else if(P > 1) this.info.type = "cluster"
  }
  
  private calculate(data: Record<string | number, string | number> | Array<string | number>): number {
    const n: number = Array.isArray(data) ? data.length : Object.values(data).length
    return n/this.info.cpusLength
  }
}