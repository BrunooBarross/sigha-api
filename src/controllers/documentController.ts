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