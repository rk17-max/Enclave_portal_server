import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 8888;

// 1. Establish the database connection globally (Vercel caches this connection across invocations)
connectDB()
  .then(() => logger.info("Database connection initialized successfully."))
  .catch((error) => {
    logger.error(`Database initialization failed: ${error.message}`);
  });

// 2. Conditionally call listen() only for local development 
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
  });
}

// 3. Export the Express app instance for Vercel's serverless handler
export default app;
