const { createLogger, format, transports } = require("winston");
const { combine, timestamp, colorize, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const devLogger = () => {
  return createLogger({
    level: "debug",
    format: combine(colorize(), timestamp(), myFormat),
    // defaultMeta: { service: "user-service" },
    transports: [new transports.Console()],
  });
};

module.exports = devLogger;
