import { DocumentInsertData } from "../repositories/documentRepository.js";
import * as documentRepository from "../repositories/documentRepository.js"

export async function createDocument(data: DocumentInsertData){
    data.issueDate = new Date(data.issueDate);
    await documentRepository.insert(data);
};