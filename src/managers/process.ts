import { ProcessOptions } from '../utils/interfaces/process'
import ProcessStructure from '../structures/process'

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

  public async runDifferentFunctions(
    ...fns: ((...args: unknown[]) => unknown)[]
  ): Promise<void> {
    await fns[this.info.id ?? 0]!(this)
  }
}
