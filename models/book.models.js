import { Schema, model, Types } from "mongoose"

const librarySchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    author:{type: Types.ObjectId, ref:'Author'},
    cover:{type:String, required: true},
    genre: {type: String, required: true},
    publisher: {type: String, required: true},
    publicationDate: { type: Date },
    publicationPlace: { type: String },
    pages: { type: Number }
});






export const LibraryModel = model('Library', librarySchema)