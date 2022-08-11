import { Router } from "express";
import { createDocument, getDocuments } from "../controllers/documentController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateDocumenData } from "../middlewares/documentMiddleware.js";

const documentRouter = Router();

documentRouter.post('/documents', validateToken, validateDocumenData, createDocument);
documentRouter.get('/documents', validateToken, getDocuments);

export default documentRouter;