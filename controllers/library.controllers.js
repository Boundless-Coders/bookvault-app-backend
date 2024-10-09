
import { LibraryModel } from "../models/library.models.js";

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await LibraryModel.find()
        res.status(200).json(books)
    } catch (error) {
        next(error)
        
    }
}
export const getOneBook = async (req, res, next) => {
    try {
        // const onebook = await LibraryModel.find();
        const onebook = await LibraryModel.findById(req.params.id);
        res.status(200).json(onebook);
        
    } catch (error) {
        next(error)
        
    }
}
export const postBook = async (req, res, next) => {
    try {
        const books = await LibraryModel.create(req.body);
        res.status(201).json(books)
        
    } catch (error) {
        next(error)
        
    }
}


export const updateBook = async (req, res, next) => {
    try {
        const onebook = await LibraryModel.find();
        const updatedBook = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) 
            
        //     {
        //     return res.status(404).json({ message: 'Book not found' });
        // }
        res.status(200).json({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        next(error);
    }
};



export const deleteBook = async (req, res, next) => {
    try {
        const onebook = await LibraryModel.find();
        const deletedBook = await LibraryModel.findByIdAndDelete(req.params.id);
        if (!deletedBook) 
            
        //     {
        //     return res.status(404).json({ message: 'Book not found' });
        // }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// Middleware to validate the book input
// export const validateBook = (req, res, next) => {
//     const { error } = bookSchema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }
//     next();
// };


