import { ProcessOptions } from '../structures/interfaces/process'
import ProcessStructure from '../structures/process'
// import { Data } from '../structures/interfaces/data'

export default class ProcessManager extends ProcessStructure {
  private groups: (string | number | object)[] = []
  constructor(options: ProcessOptions) {
    super(options)
  }

  public group(data: (string | number | object)[]): Array<unknown[]> {
    const Max = this.info.cpusLength
    const result = []
    for (let i = 0; i < Max; i += Max) {
      result.push(data.slice(i, i + Max))
    }
    return (this.groups = result)
  }

  public getGroup(): unknown {
    if (!this.info.currentId) return
    return this.groups[this.info.currentId]
  }

  public async runDifferentFunctions<T>(
    ...fns: ((...args: T[]) => unknown)[]
  ): Promise<void> {
    for (let i = this.info.currentId ?? 0; i < fns.length; i++) {
      await fns[i]!()
    }
  }
}
