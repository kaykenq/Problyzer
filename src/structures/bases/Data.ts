import Base from './Base'
import { DataOptions } from '../../structures/interfaces/data'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default class DataBase extends Base {
  constructor(
    public data: Record<string | number, string | number>,
    public options: DataOptions,
  ) {
    super()
  }

  private applyAlgorithms(): string[] {
    this.options.path = join(__dirname, this.options?.path || '../algorithms/')
    const files = readdirSync(this.options.path)
    return files
  }

  private async solveAlgorithmFile(
    file: string,
  ): Promise<new (...args: unknown[]) => unknown> {
    return await import(`${this.options.path}${file}`)
  }

  private async getAllAlgorithms(): Promise<void> {
    const files = this.applyAlgorithms()
    return await this.cache.setAll(files, this.solveAlgorithmFile)
  }

  public async loadAllAlgorithms(): Promise<void> {
    return await this.getAllAlgorithms()
  }
}
