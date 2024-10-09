// import Joi from 'joi';

// export const authorValidationSchema = (req, res, next) => {
// Define the schema for validating author input
// const authorSchema = Joi.object({
//     name: Joi.string().min(3).required(),
//     bio: Joi.string().min(10).required(),
//     location: Joi.string().min(3)
// });

// Middleware to validate the author input

   
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }
//     next();
// };