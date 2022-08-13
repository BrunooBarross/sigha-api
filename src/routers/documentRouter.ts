import { Router } from "express";
import { createDocument, deleteDocument, getDocumentByParams, getDocuments, updateDocument } from "../controllers/documentController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateDocumentData } from "../middlewares/documentMiddleware.js";

const documentRouter = Router();

documentRouter.post('/documents', validateToken, validateDocumentData, createDocument);
documentRouter.get('/documents', validateToken, getDocuments);
documentRouter.get('/documents/search', validateToken, getDocumentByParams);
documentRouter.delete('/documents', validateToken, deleteDocument);
documentRouter.put('/documents', validateToken, validateDocumentData, updateDocument);

export default documentRouter;