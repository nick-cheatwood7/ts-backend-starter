"dotenv-safe/config";
import cors from "cors";
import express from "express";
import { logger } from "./api/middleware/logger";
import routes from "./api/routes";

const createServer = () => {
  // Create HTTP server
  const app = express();
  // Apply middleware
  app.use(cors());
  app.use(express.json());
  app.use(logger);
  // Connect routes
  app.use("/api", routes);
  return { app };
};

const main = async () => {
  const PORT = 4000;
  const { app } = createServer();

  app.listen(PORT, () => {
    console.log(`✨ Express app listening on http://localhost:${PORT}`);
  });
};

main();
