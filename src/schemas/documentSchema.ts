import joi from "joi";
import { DocumentInsertData } from "../repositories/documentRepository.js";

const DocumentSchema = joi.object<DocumentInsertData>({
    title: joi.string().required(),
    type: joi.string().valid('Online', 'Presencial').required(),
    issueDate: joi.date().required(),
    hours: joi.number().required(),
});

export { DocumentSchema }