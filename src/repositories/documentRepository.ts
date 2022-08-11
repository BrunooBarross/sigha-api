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