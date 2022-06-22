import express from "express";
import config from "config";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";
import routes from "./routes";

require("dotenv").config();
const port = config.get<number>("port");
const app = express();
app.use(express.json());

app.listen(port, async () => {
  logger.info(`Server is running on port ${port}`);

  await connectDB();

  routes(app);
});
