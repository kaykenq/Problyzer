import Base from "./Base"

export default class DataBase extends Base {
    constructor(data: Record<(string | number), (string | number)>) {
        super('data', data)
    }
}