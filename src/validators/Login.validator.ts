import Joi from "joi";

export const LoginValidator = Joi.object().keys({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().required(),
});
