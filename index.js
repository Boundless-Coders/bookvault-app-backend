
import express from 'express';

// import { bookingRouter } from './routes/all-routes.js'
import mongoose from 'mongoose';
import cors from 'cors';


// Place this at the bottom after all your routes


import { bookRouter } from './routes/book.routes.js';
import { authorRouter } from './routes/author.routes.js';
import { reviewRouter } from './routes/review.routes.js';
// import { errorHandler } from './middleware/errorHandler.js';

await mongoose.connect(process.env.MONGO_URI)

const app = express()

// middlewares
app.use(cors());
app.use(express.json());
// app.use(Joi())
app.use(bookRouter);
app.use(authorRouter);
app.use(reviewRouter);


// Listen for incoming request
app.listen(3002, () => {
    console.log('App is listening on port 3002');
});

// app.use(errorHandler);