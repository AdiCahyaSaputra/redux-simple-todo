export interface IInitialState {
  userInfo: {
    username: string,
  },
  status: 'loading' | 'idle',
  error: boolean
}
