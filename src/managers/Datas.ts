import Data from "../structures/bases/Data";
import { DataOptions } from "../structures/interfaces/data";
import { readdirSync } from "node:fs";
import { join } from "node:path";
// isso aqui é para salvar arquivos, por exemplo resultados, além disso, isso aplicará alguns dos algoritimos
export default class DataManager extends Data {
    public options?: DataOptions;
    constructor(data: Record<(string | number), (string | number)>, options: DataOptions) {
        super(data)
        this.options = options
    }
    
    private async applyAlgorithms(): Promise<[ string, string[] ]> {
      const path = join(__dirname, this.options?.path || "../algorithms/")
      const files = await readdirSync(path)
      return files
    }
    
    private async solveAlgorithmFile (file: string): Promise<new (...args: any[]) => unknown> {
      return await import(`${this.options.path}${file}`)
    }
    
    private getAlgorithm(path: string, file: string): void {
      
    }
    
    public executeOneByOne(): void {
      
    }
}