import winston from 'winston'

const logger = winston.createLogger({
  // if in development, log level info and below. if production, error and below
  level: process.env.NODE_ENV === 'development' ? 'info' : 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // write logs with level error and below to error.log
    // write logs with level info and below to combined.log
    new winston.transports.File({ filename: 'error.log', level: 'error ' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

// if not in production, log to console with format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest })`
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}

export default logger
