/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface ICountSlice {
  count: number
  clicked: number
}

export interface IStore {
  counter: ICountSlice
}
