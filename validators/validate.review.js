import Joi from "joi";

export const addReviewValidator = Joi.object({
    rating: Joi.number().integer().min(1).max(5),
    comment: Joi.string(),
    book: Joi.string().required(),
});

export const updateReviewValidator = Joi.object({
    rating: Joi.number().integer().min(1).max(5),
    comment: Joi.string(),
    book: Joi.string().required(),
});