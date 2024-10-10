import Joi from "joi";

export const addAuthorValidator = Joi.object({
    name: Joi.string().required(),
    bio:  Joi.string().required(),
    location: Joi.string().required().alphanum(),
});

export const updateAuthorValidator = Joi.object({
    name: Joi.string(),
    bio:  Joi.string(),
    location: Joi.string().alphanum(),
});