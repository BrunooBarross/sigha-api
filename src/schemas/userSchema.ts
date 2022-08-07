import joi from "joi";
import { UserInsertData } from "../repositories/userRepository";

const userSchemaSignUp = joi.object<UserInsertData>({
    userName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});

const userSchemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export { userSchemaSignIn, userSchemaSignUp }