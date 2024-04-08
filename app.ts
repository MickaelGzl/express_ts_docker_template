import { config } from "dotenv";
import { start } from "./src/server";
config();

/**
 * import .env with dotenv and start the server
 * when close with a SIGINT, close the server and the connection to the database
 */

const server = start();

process.addListener("SIGINT", async () => {
  try {
    server.close();
    //here close the connection to Database
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
});
