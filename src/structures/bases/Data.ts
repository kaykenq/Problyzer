import Base from "./Base";
import Cache from "../../managers/Cache"
import { DataOptions } from "../../structures/interfaces/data";
import { readdirSync } from "node:fs";
import { join } from "node:path";

export default class DataBase extends Base {
    public options: DataOptions;
    public cache: Cache;
    constructor(data: Record<(string | number), (string | number)>, options: DataOptions) {
        super('data', data)
        this.options = options
        this.cache = new Cache()
    }
    
    private async applyAlgorithms(): Promise<string[]> {
      this.options.path = join(__dirname, this.options?.path || "../algorithms/")
      const files = await readdirSync(this.options.path)
      return files
    }
    
    private async solveAlgorithmFile (file: string): Promise<new (...args: any[]) => unknown> {
      return await import(`${this.options.path}${file}`)
    }
    
    private async getAllAlgorithms(): Promise<void> {
      const files = await this.applyAlgorithms()
      return await this.cache.setAll(files, this.solveAlgorithmFile)
    }
    
    public async loadAllAlgorithms(): Promise<void> {
      return await this.getAllAlgorithms()
    }
    
}