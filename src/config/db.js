import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb://backend:9873754056@cluster0-shard-00-00.sbrgl.mongodb.net:27017,cluster0-shard-00-01.sbrgl.mongodb.net:27017,cluster0-shard-00-02.sbrgl.mongodb.net:27017/?ssl=true&replicaSet=atlas-efi1bs-shard-0&authSource=admin&appName=Cluster0");

    logger.info(
      `MongoDB Connected : ${connection.connection.host}`
    );
  } catch (error) {
    logger.error(`MongoDB Connection Failed : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;