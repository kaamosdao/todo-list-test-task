interface IFilterSwitch {
  readonly name: string,
  readonly id: string,
}

export interface ITask {
  readonly id: string,
  readonly name: string,
  readonly status: string,
}

export default IFilterSwitch;
