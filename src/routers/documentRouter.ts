import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateDocumenData } from "../middlewares/documentMiddleware.js";

const documentRouter = Router();

documentRouter.post('/documents', validateToken, validateDocumenData);

export default documentRouter;