import prisma from "../db.js";
import { Documents } from "@prisma/client"; 

export type DocumentInsertData = Omit<Documents, "id" | "createdAt">;