export default class Cache extends Map {
  setAllElementsInArray(keys: Array<string | number>, values: Array<string | number>): void {
    return keys.forEach((key: string | number, i: number) => { this.set(key, values[i]) })
  }
  
  async setAll(keys: Array<string | number>, fn: (...args: any[]) => Promise<new (...args: any[]) => unknown>): Promise<void> {
    return keys.forEach((key: string | number) => this.set(key, fn(key)))
  }
}