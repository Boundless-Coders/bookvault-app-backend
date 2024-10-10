import { AuthorModel } from "../models/author.models.js";
import { addAuthorValidator } from "../validators/validate.author.js";
import { updateAuthorValidator } from "../validators/validate.author.js";

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorModel.find();
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
}

export const getOneAuthor = async (req, res, next) => {
    try {
        const author = await AuthorModel.findById(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        next(error);
    }
}

export const postAuthor = async (req, res, next) => {
    try {
        const{error, value} = addAuthorValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
        const newAuthor = await AuthorModel.create(value);
        res.status(201).json(newAuthor);
    } catch (error) {
        next(error);
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
         // Validate user update
         const { error, value } = updateAuthorValidator.validate(req.body);
         if (error)
             return res.status(422).json(error)
        const updatedAuthor = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedAuthor);
    } catch (error) {
        next(error);
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        await AuthorModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Author deleted" });
    } catch (error) {
        next(error);
    }
}