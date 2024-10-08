
import { LibraryModel } from "../models/library.models.js";

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await library.find()
        res.status(200).json(books)
    } catch (error) {
        next(error)
        
    }
}
export const getOneBook = async (req, res, next) => {
    try {
        const onebook = await library.find();
        // const onebook = await LibraryModel.findById(req.params.id);
        res.status(200).json(onebook);
        
    } catch (error) {
        next(error)
        
    }
}
export const postBook = async (req, res, next) => {
    try {
        const books = await library.create(req.body);
        res.status(201).json(books)
        
    } catch (error) {
        next(error)
        
    }
}
export const updateBook = async (req, res, next) => {
    try {
        res.json('Book Updated');
        
    } catch (error) {
        next(error)
        
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        res.json('Book Deleted');
        
    } catch (error) {
        next(error)
        
    }
}
