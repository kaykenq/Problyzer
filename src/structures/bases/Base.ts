export default class Base {
    constructor(data: Record<string | number, string | number>) {
        Object.defineProperty(this, '', {value: data})

    }

    public toJSON(o: string): object {
        return JSON.parse(o)
    }

    public toString(o: object): string {
        return JSON.stringify(o)
    }
}