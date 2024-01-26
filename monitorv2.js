const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

const WebMonitor = require('website-pinger');

const Monitor = new WebMonitor('https://4cccbdb8-2940-46f7-8bcb-a577e31d391a-00-3iovyujxse7f5.pike.replit.dev/', {
  interval: 3000,
  timeout: 5000
});

Monitor.start();

Monitor.on('outage', (outage) => {
  logger.error(outage);
});

Monitor.on('up', (up) => {
  logger.info(up);
});

Monitor.on('error', (error) => {
  logger.error(error);
});