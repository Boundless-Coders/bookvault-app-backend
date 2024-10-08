
import { Router } from "express";
import{ getAllBooks, getOneBook, postBook, updateBook, deleteBook } from '../controllers/book.controllers.js'
import { addbookValidator } from "../validators/validate.book.js";
export const bookRouter = Router()

//Define routes for books
bookRouter.get('/books', getAllBooks) // Get all books
bookRouter.get('/book/:id', getOneBook) // Get a book by ID
bookRouter.post('/book', postBook) // Add a new book
bookRouter.patch('/book/:id', updateBook) // Update a book by ID //
bookRouter.delete('/book/:id', deleteBook) // Delete a book by ID

export default bookRouter




