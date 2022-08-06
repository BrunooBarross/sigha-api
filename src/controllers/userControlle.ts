import { Request, Response } from "express";

export function userSignUp(req: Request, res: Response) {
    const { location: imageUrl, size, originalname: name, key } = req.file as Express.MulterS3.File;

    const data = {
        imageUrl,
        size,
        name,
        key
    }
    res.send(data)
}