import { Router } from "express";
import { getAllReviews, getOneReview, postReview, updateReview, deleteReview } from "../controllers/review.controllers.js";

export const reviewRouter = Router();

reviewRouter.get('/reviews', getAllReviews);
reviewRouter.get('/reviews/:id', getOneReview);
reviewRouter.post('/reviews', postReview);
reviewRouter.patch('/reviews/:id', updateReview);
reviewRouter.delete('/reviews/:id', deleteReview);

export default reviewRouter