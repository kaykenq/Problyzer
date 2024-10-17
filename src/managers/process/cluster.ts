import { ProcessOptions } from '../../structures/interfaces/process'
import ProcessManager from '../process'
import Cluster from 'node:cluster'

export default class ClusterProcess extends ProcessManager {
  constructor(options: ProcessOptions) {
    super(options)
  }

  public create(
    env:
      | Record<string | number, string | number>
      | Array<string | number>
      | string
      | number,
  ) {
    return super.appendWorkers(Cluster.fork(env))
  }

  public update() {
    return super.setInfo({
      id: Cluster.worker?.id,
      workers: Cluster.workers,
      worker: Cluster.worker,
      cpusLength: 0,
    })
  }
}
