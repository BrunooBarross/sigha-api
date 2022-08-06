import { Router } from "express";
import upload from "../config/multer.js"
import { userSignUp } from "../controllers/userControlle.js";

const userRouter = Router();

userRouter.post("/signup", upload.single('file'), userSignUp);

export default userRouter;