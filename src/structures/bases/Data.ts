type Data = Array<string | number> | object

export default class DataBase {
    public data: Data;
    constructor(data: Data) {
        this.data = data
    }
}