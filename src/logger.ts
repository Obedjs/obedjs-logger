// src/logger.ts

import * as fs from 'fs';
import * as path from 'path';

enum LogLevel {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  DEBUG = 'debug'
}

class Logger {
  private logFilePath: string;
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel = LogLevel.INFO, logFilePath: string = 'app.log') {
    this.logLevel = logLevel;
    this.logFilePath = path.join(__dirname, logFilePath);
  }

  private writeLog(message: string, level: LogLevel) {
    const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}]: ${message}\n`;
    fs.appendFileSync(this.logFilePath, logMessage);
    if (level === LogLevel.ERROR) {
      console.error(logMessage);
    } else if (level === LogLevel.WARN) {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  public info(message: string) {
    if (this.shouldLog(LogLevel.INFO)) {
      this.writeLog(message, LogLevel.INFO);
    }
  }

  public warn(message: string) {
    if (this.shouldLog(LogLevel.WARN)) {
      this.writeLog(message, LogLevel.WARN);
    }
  }

  public error(message: string) {
    if (this.shouldLog(LogLevel.ERROR)) {
      this.writeLog(message, LogLevel.ERROR);
    }
  }

  public debug(message: string) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      this.writeLog(message, LogLevel.DEBUG);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}

export default Logger;
export { LogLevel };
