import { Next } from 'koa'
import uuid from 'uuid/v4'
import { IAppContext } from '../utils'

const requestId = () => async (ctx: IAppContext, next: Next) => {
  ctx.state.serverRequestId = uuid()
  ctx.response.set('x-server-request-id', ctx.state.serverRequestId)
  await next()
}

export default requestId
