import DataBase from "./bases/Data";
import { DataOptions, AlgorithmsInterface } from "../structures/interfaces/data";

export default class Data extends DataBase {
  constructor(data: Record<(string | number), (string | number)>, options: DataOptions) {
        super(data, options)
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