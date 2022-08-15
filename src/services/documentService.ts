import { DocumentInsertData } from "../repositories/documentRepository.js";
import * as documentRepository from "../repositories/documentRepository.js"
import * as deleteAws from "../config/deleteAws.js"

export async function createDocument(data: DocumentInsertData){
    data.issueDate = new Date(data.issueDate);
    await documentRepository.insert(data);
};

export async function getAllDocuments(userId: number){
    const result = await documentRepository.selectAllDocuments(userId);
    return result;
};

export async function getDocumentByQueryParams(title: string){
    return await documentRepository.selectByTitle(title);
};

export async function deleteDocument(id: number, userId: number) {
    const findDocument = await checkExistsDocument(id, userId);
    deleteAws.deleteFileAwsByKey(findDocument.awsFileKey);
    documentRepository.deleteDocument(id);
};

async function checkExistsDocument(id: number, userId: number) {
    const document = await documentRepository.selectByIdAndUserId(id, userId);

    if (!document) {
        throw { type: "unauthorized", message: 'document does not exist or does not belong to you' }
    }

    return document;
};

export async function updateDocument(id: number, userId: number, data: DocumentInsertData){
    const document = await checkExistsDocument(id, userId);
    if (!document) {
        throw { type: "unauthorized", message: 'document does not exist or does not belong to you' }
    }
    if(data.awsFileKey !== "false"){
        deleteAws.deleteFileAwsByKey(document.awsFileKey);
    }
    data.issueDate = new Date(data.issueDate);
    await documentRepository.update(id, data);
};