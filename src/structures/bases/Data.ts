type Data = Array<string | number> | Record<string | number, string | number>

export default class DataBase {
    public data: Data;
    constructor(data: Data) {
        this.data = data
    }

    public get getInformation() {
        const key = Object.keys(this.data)
        return 1
    }
}