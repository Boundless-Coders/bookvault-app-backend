
import { bookModel } from "../models/book.models.js";
import { addbookValidator, updatebookValidator } from "../validators/validate.book.js";

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await bookModel.find().populate('author')
        res.status(200).json(books)
    } catch (error) {
        next(error)

    }
}
export const getOneBook = async (req, res, next) => {
    try {
        // const onebook = await bookModel.find();
        const onebook = await bookModel.findById(req.params.id);
        res.status(200).json(onebook);

    } catch (error) {
        next(error)

    }
}
export const postBook = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = addbookValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // Add books 
        const books = await bookModel.create(value);
        res.status(201).json(books)

    } catch (error) {
        next(error)

    }
}


export const updateBook = async (req, res, next) => {
    try {
        // Validate user update
        const { error, value } = updatebookValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }

        // Add one book by id
        // const onebook = await bookModel.updateMany(value);
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        const onebook = await bookModel.find();
        const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
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


