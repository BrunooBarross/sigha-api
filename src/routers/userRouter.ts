import { Router } from "express";
import upload from "../config/multer.js"
import { userLogin, userSignUp } from "../controllers/userControlle.js";
import { validateDataSignIn, validateDataSignUp, verifyConflictEmail } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, verifyConflictEmail, userSignUp);
userRouter.post("/signin", validateDataSignIn, userLogin);

export default userRouter;