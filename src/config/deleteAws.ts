import aws from "@aws-sdk/client-s3"
import dotenv from "dotenv"
import { Request } from "express";
dotenv.config()

export default function deleteFileAws(req: Request) {
    const { key: awsFileKey } = req.file as Express.MulterS3.File;

    const s3 = new aws.S3({ region: process.env.AWS_DEFAULT_REGION })

    s3.deleteObject({ Bucket: 'sigha', Key: awsFileKey }, (err, data) => {
        if (err) {
            console.error(err);
        };
    });
}