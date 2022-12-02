import joi from "joi";
import { UserInsertData } from "../repositories/userRepository";

const userSchemaSignUp = joi.object<UserInsertData>({
    userName: joi.string().min(3).required(),
    email: joi.string().required(),
    password: joi.string().min(4).required()
});

const userSchemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});

export { userSchemaSignIn, userSchemaSignUp }