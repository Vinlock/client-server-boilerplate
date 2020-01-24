import app from './koa'
import logger from './logger'

const { APP_API_PORT } = process.env

const port: number = Number(APP_API_PORT || 4000)

app.listen(port)

logger.info('Application is running')
