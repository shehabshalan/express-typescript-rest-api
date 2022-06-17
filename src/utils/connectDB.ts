import mongoose from "mongoose";
import config from "config";

const connectDB = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }
};

export default connectDB;
