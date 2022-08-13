import { NextFunction, Request, Response } from "express";
import { DocumentSchema } from "../schemas/documentSchema.js";

export function validateDocumentData(req: Request, res: Response, next: NextFunction) {
    const { error } = DocumentSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}