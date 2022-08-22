import express from "express";
import { logger } from "./api/middleware/logger";
import routes from "./api/routes";

const main = async () => {
  const PORT = 4000;
  const app = express();

  app.use(express.json());
  app.use(logger);
  app.use("/api", routes);

  app.listen(PORT, () => {
    console.log(`✨ Express app listening on http://localhost:${PORT}`);
  });
};

main();
