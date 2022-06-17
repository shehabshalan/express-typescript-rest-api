import pino from "pino";
import dayjs from "dayjs";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  customPrettifiers: {
    time: (timestamp: any) => ` "time": "${dayjs().format()}"`,
  },
});
export default log;
