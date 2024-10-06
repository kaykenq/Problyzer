import Data from "../structures/bases/Data";
import Cache from "./Cache";
import { DataOptions, AlgorithmsInterface } from "../structures/interfaces/data";
import { readdirSync } from "node:fs";
import { join } from "node:path";
// isso aqui é para salvar arquivos, por exemplo resultados, além disso, isso aplicará alguns dos algoritimos
export default class DataManager extends Data {
    public options: DataOptions;
    public cache: Cache;
    constructor(data: Record<(string | number), (string | number)>, options: DataOptions) {
        super(data)
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
    
    public async choose(id: string | number): Promise<unknown> {
      const Class = this.cache.get(id)
      return await this.runAlgorithm(Class)
    }
    
    private async runAlgorithm (C: new (...args: any[]) => AlgorithmsInterface): Promise<unknown> {
      const Algorithm = new C(this)
      /* this.emit("debug", "[RUNNING_ALGORITHM] => Algorithm.name (Algorithm.id)") */
      return await Algorithm.execute(this)
    }
}