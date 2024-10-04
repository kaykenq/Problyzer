export default class Base {
    constructor(n: string, data: Record<(string | number), (string | number)>) {
        Object.defineProperty(this, n, { value: data })

    }

    public toJSON(o: string): object {
        return JSON.parse(o)
    }

    public toString(o: object): string {
        return JSON.stringify(o)
    }
}