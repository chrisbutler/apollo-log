declare module "apollo-log" {
  type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "silent";

  export interface LoggerOptions {
    level?: LogLevel;
    mutate?: (level: LogLevel, data: Record<string, string> | string) => object | null;
    prefix?: string;
    timestamp?: boolean;
    logger?: object;
  }

  export class ApolloLogExtension {
    constructor(options: LoggerOptions);
  }
}
