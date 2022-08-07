import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    const { location: imageUrl, size, originalname: name, key: awsFileKey } = req.file as Express.MulterS3.File;
    const data = {...req.body, awsFileKey}
    await userService.createUser(data);
    return res.sendStatus(201);
}