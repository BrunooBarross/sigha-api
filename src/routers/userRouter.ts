import { Router } from "express";
import upload from "../config/multer.js"
import { userSignUp } from "../controllers/userControlle.js";
import { validateDataSignUp, verifyConflictEmail } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, verifyConflictEmail, userSignUp);

export default userRouter;