import { ProcessOptions } from '../../structures/interfaces/process'
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
}
