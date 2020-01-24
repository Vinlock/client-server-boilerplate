import winston from 'winston'

const {
  APP_LOG_LEVEL,
} = process.env

const logger = winston.createLogger({
  defaultMeta: {
    app: 'logic-service',
  },
  format: winston.format.json(),
  level: APP_LOG_LEVEL || 'info',
  transports: [
    new winston.transports.Console(),
  ],
})

export default logger
