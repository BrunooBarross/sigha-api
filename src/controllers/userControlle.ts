import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    const { location: imageUrl, size, originalname: name, key: awsFileKey } = req.file as Express.MulterS3.File;
    const data = {...req.body, awsFileKey, imageUrl}
    await userService.createUser(data);
    return res.sendStatus(201);
}

export async function userLogin(req: Request, res: Response){
    const data = req.body;
    const userData = await userService.signin(data);
    res.status(200).send(userData)
}