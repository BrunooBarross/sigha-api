import prisma from "../db.js";
import { Documents } from "@prisma/client"; 

export type DocumentInsertData = Omit<Documents, "id" | "createdAt">;

export async function insert(data: DocumentInsertData){
    await prisma.documents.create({
        data:{
            ...data
        }
    });
};

export async function selectAllDocuments(userId: number){
    return await prisma.documents.findMany({
        where: {
            userId
        },
        orderBy:{
            issueDate: 'desc'  
        }
    });
};

export async function selectByTitle(title: string){
    return await prisma.documents.findMany({
        where: {
            title: {
                contains: title,
                mode: 'insensitive'
            }
        }
    });
};

export async function selectByIdAndUserId(id: number, userId: number){
    return await prisma.documents.findFirst({
        where:{
            id,
            userId
        }
    });
}

export async function deleteDocument(id: number) {
    await prisma.documents.delete({
        where: {
            id
        }
    });
};

export async function update(id: number, data: DocumentInsertData){
    if(data.awsFileKey === "false"){
        return await prisma.documents.update({
            where:{
                id
            },
            data:{
                title: data.title,
                type: data.type,
                issueDate: data.issueDate,
                hours: data.hours
            }
        }); 
    }
    return await prisma.documents.update({
        where:{
            id
        },
        data:{
            ...data
        }
    });
};