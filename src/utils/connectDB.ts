import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectDB = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("MongoDB is connected");
  } catch (err) {
    logger.error("Error connecting to MongoDB");
    process.exit(1);
  }
};

export default connectDB;
