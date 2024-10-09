import { Schema, model, Types } from "mongoose"

const librarySchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    author:{type: Types.ObjectId, ref:'Author'},
    cover:{type:String, required: true},
    content: {type: String, required: true},

});






export const LibraryModel = model('Library', librarySchema)