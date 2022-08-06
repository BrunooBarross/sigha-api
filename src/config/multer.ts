import multer from "multer";
import crypto from "crypto"
import multerS3 from "multer-s3"
import { S3Client } from "@aws-sdk/client-s3"
import dotenv from "dotenv"
dotenv.config()

export const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/uploads')
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.originalname);
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    }),
    s3: multerS3({
        s3: new S3Client({ region: process.env.AWS_DEFAULT_REGION }),
        bucket: 'sigha',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.originalname);
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    })
}

const upload = multer({
    dest: './src/uploads',
    storage: storageTypes["s3"],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/jpg',
            'image/png',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'))
        }
    }

})

export default upload;