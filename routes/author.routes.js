import { Router } from "express";
import { getAllAuthors, getOneAuthor, postAuthor, updateAuthor, deleteAuthor } from '../controllers/author.controllers.js';
// import { authorValidationSchema } from "../middleware/validate-author.js";

export const authorRouter = Router();

authorRouter.get('/authors', getAllAuthors);
authorRouter.get('/authors/:id', getOneAuthor);
authorRouter.post('/authors', postAuthor);
authorRouter.patch('/authors/:id', updateAuthor);
authorRouter.delete('/authors/:id', deleteAuthor);

export default authorRouter