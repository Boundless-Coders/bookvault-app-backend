// import Joi from 'joi';

// export const reviewValidationSchema = (req, res, next) => {
// Define the schema for validating review input
// const reviewSchema = Joi.object({
//     rating: Joi.number().min(1).max(5).required(),
//     comment: Joi.string().optional()
// });

// Middleware to validate the review input

//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }
//     next();
// };