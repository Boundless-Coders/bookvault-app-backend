import { Schema, model, Types } from "mongoose"

const librarySchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    author:{type: Types.ObjectId, ref:'Author'},
    cover:{type:String, required: true},
    content: {type: String, required: true},

});

// Define the schema to validate the book input
// const bookSchema = Joi.object({
//     title: Joi.string().min(3).required(),
//     description: Joi.string().required(),
//     author: Joi.string().required(),
//     cover: Joi.string().required(),
//     content: Joi.string().required()
// })




export const LibraryModel = model('Library', librarySchema)