import { Request, Response } from "express";
import * as documentService from "../services/documentService.js"

export async function createDocument(req: Request, res: Response){
    const { location: documentUrl, size, originalname: name, key: awsFileKey } = req.file as Express.MulterS3.File;
    const userId = res.locals.userId;
    const data = {...req.body, userId, documentUrl, awsFileKey}
    data.hours = parseInt(data.hours);
    await documentService.createDocument(data);
    return res.sendStatus(201)
}

export async function getDocuments(req: Request, res: Response){
    const userId = res.locals.userId;
    const result = await documentService.getAllDocuments(userId);
    res.status(200).send(result);
}

export async function getDocumentByParams(req: Request, res: Response){
    const {title} = req.query;
    const result = await documentService.getDocumentByQueryParams(title.toString());
    return res.status(200).send(result);
}