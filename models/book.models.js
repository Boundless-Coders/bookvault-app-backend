import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema({
    title: {type:String, required:true},
    cover:{type:String, required: true},
    author:{type: Types.ObjectId, ref:'Author'},
    location: {type: String, required: true},
    genre: {type: String, required: true},
    publisher: {type: String, required: true},
    publicationDate: {type: String, required: true},
    PublicationPlace:{type: String, required: true},
    pages:{type: Number},



});






export const bookModel = model('Book', bookSchema)