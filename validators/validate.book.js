import Joi from "joi";

export const addbookValidator = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    cover: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    genre: Joi.string().min(3).required(),
    publisher: Joi.string().min(3).required(),
    publicationDate: Joi.date(),
    publicationPlace: Joi.string().min(3).required(),
    pages: Joi.number().integer().greater(1),
});

export const updatebookValidator = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string().required(),
    cover: Joi.string().min(78),
    author: Joi.string().min(90),
    genre: Joi.string().min(78),
    publisher: Joi.string().min(89),
    publicationDate: Joi.date(),
    publicationPlace: Joi.string().min(76),
    pages: Joi.number().integer().greater(1),
});