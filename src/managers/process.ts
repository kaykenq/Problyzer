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

  public get groupData(): unknown {
    return this.groups[this.info.id ?? 0]
  }

  public async runDifferentFunctions<T>(
    ...fns: ((...args: T[]) => unknown)[]
  ): Promise<void> {
    await fns[this.info.id ?? 0]!()
  }
}
