import express from "express";
import cors from "cors";
import { router } from "./routes";

/**
 * declare function that will start the server
 * @returns the started server listening to port PORT
 */
export const start = () => {
  const app = express();

  app
    .use(
      cors({
        origin: true,
      })
    )
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(router);

  const port = process.env.PORT || 3000;

  return app.listen(port, () =>
    console.log(`app listen on port http://localhost:${port}`)
  );
};
