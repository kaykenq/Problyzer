import Cache from '../../managers/Cache'

export default class Base {
  public cache: Cache
  constructor(
    n: string,
    data?: Record<string | number, string | number> | undefined,
  ) {
    Object.defineProperty(this, n, { value: data })
    this.cache = new Cache()
  }

  public toJSON(o: string): object {
    return JSON.parse(o)
  }

  public toString(o: object): string {
    return JSON.stringify(o)
  }
}
