import { DefaultState, ExtendableContext } from 'koa'

export interface IAppState extends DefaultState {
  serverRequestId?: string
}

export interface IAppContext extends ExtendableContext {
  state?: IAppState
}
