import aws from "@aws-sdk/client-s3"
import dotenv from "dotenv"
dotenv.config()

export default function deleteFileAws(key: string){
    const s3 = new aws.S3({ region: process.env.AWS_DEFAULT_REGION })
   
    s3.deleteObject({ Bucket: 'sigha', Key: key }, (err, data) => {
        if(err){
            console.error(err);
        };
    });
}