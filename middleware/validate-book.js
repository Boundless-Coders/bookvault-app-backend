import Joi from 'joi';

export const bookValidationSchema = (res, req, next) => {

const bookSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    cover: Joi.string().required(),
    content: Joi.string().required()
})

const { error } = schema.validate(req.body);
if (error) return res.status(400).json({ success: false, message: error.details[0]. message});
} 