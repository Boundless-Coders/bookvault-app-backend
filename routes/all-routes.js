
import { Router } from "express";
import{ getAllBooks, getOneBook, postBook, updateBook, deleteBook } from '../controllers/library.controllers.js'
import { bookValidationSchema } from "../middleware/validate-book.js";
export const bookRouter = Router()

//Define routes for books
bookRouter.get('/book', getAllBooks) // Get all books
bookRouter.get('/book/:id', getOneBook) // Get a book by ID
bookRouter.post('/book', bookValidationSchema, postBook) // Add a new book
bookRouter.patch('/book/:id', bookValidationSchema, updateBook) // Update a book by ID
bookRouter.delete('/book/:id', deleteBook) // Delete a book by ID

export default bookRouter




