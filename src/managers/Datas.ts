import Data from "../structures/bases/Data"
import { DataOptions } from "../structures/interfaces/data"
// isso aqui é para salvar arquivos, por exemplo resultados, além disso, isso aplicará alguns dos algoritimos
export default class DataManager extends Data {
    public options?: DataOptions;
    constructor(data: Record<(string | number), (string | number)>) {
        super(data)
    }

    public applyAlgorithm(options: DataOptions) {
        this.options = options
    }
}