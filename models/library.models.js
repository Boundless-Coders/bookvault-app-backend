import { Schema, model } from "mongoose"

const librarySchema = new Schema({
   bookName: {
    type: String,
   },

   bookAuthor: {
    type: String,
   },

   bookDescription: {
    type: String,
   },

   bookPage: {
    type: Number,

   }
})


export const library = model('Library', librarySchema)