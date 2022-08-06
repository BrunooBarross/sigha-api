import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.js";
import handleError from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(express.urlencoded({extended: true}));//lidar com requisições no padrão url encoded
app.use(router);
app.use(handleError);

export default app;