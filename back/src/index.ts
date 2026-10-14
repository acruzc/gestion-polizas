import express, {type Express, type Request, type Response} from "express";
import cors from "cors";

import policiesRoutes from "./routes/policiesRoutes";

const port = 3000;

class Server{
  public app: Express;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", port);
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/api", policiesRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is running at http://localhost:${this.app.get("port")}`);
    });
  }
}


const server = new Server();
server.start();