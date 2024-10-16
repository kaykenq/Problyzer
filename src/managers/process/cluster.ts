import {
  ProcessOptions,
  ProcessResponse,
} from '../../structures/interfaces/process'
import ProcessManager from '../process'
import Cluster from 'node:cluster'

type K = (string | number | object)[]

export default class ClusterProcess extends ProcessManager {
  constructor(options: ProcessOptions) {
    super(options)
  }

  public createClusters(...k: K) {
    return super.appendWorkers(Cluster.fork(k))
  }

  public update() {
    const info: ProcessResponse = {
      id: Cluster.worker?.id,
      workers: Cluster.workers,
      worker: Cluster.worker,
      cpusLength: 0,
    }

    super.setInfo(info)
  }
}
