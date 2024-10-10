import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String, required: true },
    author: { type: Types.ObjectId, ref: 'Author' },
    genre: { type: String, required: true },
    publisher: { type: String, required: true },
    publicationDate: { type: Date },
    publicationPlace: { type: String },
    pages: { type: Number },

});






export const bookModel = model('Book', bookSchema)