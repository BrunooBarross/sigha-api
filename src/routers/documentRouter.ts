import { Router } from "express";
import { createDocument } from "../controllers/documentController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateDocumenData } from "../middlewares/documentMiddleware.js";

const documentRouter = Router();

documentRouter.post('/documents', validateToken, validateDocumenData, createDocument);

export default documentRouter;