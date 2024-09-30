export default class Base {
    public toJSON(o: string): object {
        return JSON.parse(o)
    }

    public toString(o: object): string {
        return JSON.stringify(o)
    }
}