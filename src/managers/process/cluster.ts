import { ProcessOptions } from '../../structures/interfaces/process'
import ProcessManager from '../process'
import Cluster from 'node:cluster'
import { availableParallelism } from 'node:os'

type ENV =
  | Record<string | number, string | number>
  | Array<string | number>
  | string
  | number
  | undefined
export default class ClusterProcess extends ProcessManager {
  constructor(options: ProcessOptions) {
    super(options)
  }

  private create(env?: ENV) {
    return super.appendWorkers(Cluster.fork(env))
  }

  public update() {
    return super.setInfo({
      id: Cluster.worker?.id,
      workers: Cluster.workers,
      worker: Cluster.worker,
      cpusLength: availableParallelism(),
    })
  }

  public __create__(env?: ENV): void {
    for (let i = 0; i < this.info.cpusLength; i++) {
      this.create(env)
    }
  }

  public __runAll__(
    algorithms: (m: unknown) => Promise<unknown>[],
  ): Promise<unknown> {
    return this.runDifferentFunctions(algorithms)
  }

  public __run__(
    algorithm: (m: unknown) => Promise<unknown>,
  ): Promise<unknown> {
    return algorithm(this.info)
  }
}
