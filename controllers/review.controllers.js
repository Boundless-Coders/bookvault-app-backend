import { ReviewModel } from "../models/review.models.js";
import { updateReviewValidator, addReviewValidator,  } from "../validators/validate.review.js";



export const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await ReviewModel.find().populate('book');
        res.status(200).json(reviews);
    } catch (error) {
        next(error);
    }
}

export const getOneReview = async (req, res, next) => {
    try {
        const review = await ReviewModel.findById(req.params.id).populate('book');
        res.status(200).json(review);
    } catch (error) {
        next(error);
    }
}

export const postReview = async (req, res, next) => {
    try {
        // Validate user update
        const { error, value } = addReviewValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        const newReview = await ReviewModel.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        next(error);
    }
}

export const updateReview = async (req, res, next) => {
    try {
        // Validate user update
        const { error, value } = updateReviewValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        const updatedReview = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedReview);
    } catch (error) {
        next(error);
    }
}

export const deleteReview = async (req, res, next) => {
    try {
        await ReviewModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Review deleted" });
    } catch (error) {
        next(error);
    }
}