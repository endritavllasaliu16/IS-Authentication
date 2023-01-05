import Joi from 'joi';

export const RegisterValidator = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});
