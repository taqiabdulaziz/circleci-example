const winston = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const config = require('../../config');

const { createLogger } = winston;

const logDir = `${config.get('log-dir')}/`;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const transportDaily = new winston.transports.DailyRotateFile({
  filename: '%DATE%.log',
  dirname: logDir,
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  json: true,
});

const transportConsole = new winston.transports.Console({ colorize: true });

const winstonLogger = createLogger({
  transports: [transportDaily, transportConsole],
});

const logger = {
  info: (params) => {
    winstonLogger.info(params);
  },
  error: (params) => {
    winstonLogger.error(params);
  },
};

module.exports = logger;
