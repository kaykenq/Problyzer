export default class Cache extends Map {
  setAllElementsInArray(
    keys: Array<string | number>,
    values: Array<string | number>,
  ): void {
    return keys.forEach((key: string | number, i: number) =>
      this.set(key, values[i]),
    )
  }

  async setAll<T>(
    keys: Array<T>,
    fn: (arg: T) => Promise<new (...args: T[]) => unknown>,
  ): Promise<void> {
    return keys.forEach((key: T) => this.set(key, fn(key)))
  }
}
