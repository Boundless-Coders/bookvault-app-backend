import { AuthorModel } from "../models/author.models.js";

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
        const newAuthor = await AuthorModel.create(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        next(error);
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
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