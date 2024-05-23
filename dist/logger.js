"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "info";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor(logLevel = LogLevel.INFO, logFilePath = 'app.log') {
        this.logLevel = logLevel;
        this.logFilePath = path.join(__dirname, logFilePath);
    }
    writeLog(message, level) {
        const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}]: ${message}\n`;
        fs.appendFileSync(this.logFilePath, logMessage);
        if (level === LogLevel.ERROR) {
            console.error(logMessage);
        }
        else if (level === LogLevel.WARN) {
            console.warn(logMessage);
        }
        else {
            console.log(logMessage);
        }
    }
    info(message) {
        if (this.shouldLog(LogLevel.INFO)) {
            this.writeLog(message, LogLevel.INFO);
        }
    }
    warn(message) {
        if (this.shouldLog(LogLevel.WARN)) {
            this.writeLog(message, LogLevel.WARN);
        }
    }
    error(message) {
        if (this.shouldLog(LogLevel.ERROR)) {
            this.writeLog(message, LogLevel.ERROR);
        }
    }
    debug(message) {
        if (this.shouldLog(LogLevel.DEBUG)) {
            this.writeLog(message, LogLevel.DEBUG);
        }
    }
    shouldLog(level) {
        const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
        return levels.indexOf(level) >= levels.indexOf(this.logLevel);
    }
}
exports.default = Logger;
