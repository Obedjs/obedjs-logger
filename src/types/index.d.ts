// types/index.d.ts

declare module 'obedjs-logger' {
  export enum LogLevel {
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    DEBUG = 'debug'
  }

  class Logger {
    constructor(logLevel?: LogLevel, logFilePath?: string);

    public info(message: string): void;
    public warn(message: string): void;
    public error(message: string): void;
    public debug(message: string): void;
  }

  export default Logger;
}
