import Cache from '../../managers/Cache'

export default class Base {
  public cache: Cache
  constructor() {
    this.cache = new Cache()
  }

  public toJSON(o: string): object {
    return JSON.parse(o)
  }

  public toString(o: object): string {
    return JSON.stringify(o)
  }

  public toArray(o: object): Array<string | number | object> {
    return Object.values(o)
  }
}
