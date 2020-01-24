import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import requestId from './requestId'

const applyMiddleware = (app: Koa) => {
  app.use(json())
  app.use(logger())
  app.use(bodyParser())
  app.use(requestId())
}

export default applyMiddleware
