
import { Router } from "express";
import{ getAllBooks, getOneBook, postBook, updateBook, deleteBook } from '../controllers/library.controllers.js'

export const bookRouter = Router()

bookRouter.get('/book', getAllBooks)

bookRouter.get('/book/:id', getOneBook)

bookRouter.post('/book', postBook)

bookRouter.patch('/book/:id', updateBook)

bookRouter.delete('/book/:id', deleteBook)

