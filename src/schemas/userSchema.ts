import joi from "joi";

const userSignUp = joi.object({
    userName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});

const userSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});