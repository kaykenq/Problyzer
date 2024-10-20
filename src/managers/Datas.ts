import Data from '../structures/Data'
import { DataOptions } from '../utils/interfaces/data'
// isso aqui é para salvar arquivos, por exemplo resultados, além disso, isso aplicará alguns dos algoritimos
export default class DataManager extends Data {
  constructor(
    data: Record<string | number, string | number>,
    options: DataOptions,
  ) {
    super(data, options)
  }
}
