import Koa from 'koa'
import Router from 'koa-router'
import { IAppContext, IAppState } from './utils'
import applyMiddleware from './middleware'
import routes from './routes'

const baseRouter = new Router()

const app: Koa = new Koa<IAppState, IAppContext>()
app.use(baseRouter.routes())
applyMiddleware(app)

routes(app)

export default app

