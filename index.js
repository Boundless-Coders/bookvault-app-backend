
import express from 'express';

// import { bookingRouter } from './routes/all-routes.js'
import mongoose from 'mongoose';
import cors from 'cors';

import { bookRouter } from './routes/all-routes.js';

await mongoose.connect(process.env.MONGO_URI)

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(bookRouter)


// Listen for incoming request
app.listen(3002, () => {
    console.log('App is listening on port 3002');
});