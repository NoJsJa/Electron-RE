export interface fnDebounceFn {
  (args: unknown) : unknown
}

export interface objType {
  [key: number | string]: any
}

export interface historyType {
  [pid: number]: { memory: number[], cpu: number[] } 
}

export interface record {
  [pid: number]: { memory: number, cpu: number, ppid: number }
}

export interface sorting {
  path: 'memory' | 'cpu' | 'pid' | 'ppid',
  how: 'ascend' | 'descend' | null
}

export interface processTypes {
  [pid: number]: { type: string, url: string }
}

export interface ProcessManagerState {
  processes: record,
  logs: { [pid: number]: string[] },
  history: {
    [pid: number]: { memory: number[], cpu: number[] }
  },
  types: processTypes,
  sorting: sorting,
  logVisible: boolean,
  trendsVisible: boolean,
  selectedPid: number
}
