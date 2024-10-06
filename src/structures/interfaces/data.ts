export interface DataOptions {
    algorithm: number[];
    path: string | "../algorithms"
}

export interface AlgorithmsInterface {
  execute: (...args: any[]) => Promise<any>
}