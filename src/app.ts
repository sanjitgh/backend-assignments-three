import express, { Application, Request, Response } from 'express';
import { booksRoutes } from './app/controllers/book.controller';
import { borrowRoute } from './app/controllers/borrow.controller';

const app: Application = express();
app.use(express.json());

// Display api home page 
app.get('/', (req: Request, res: Response) => {
   res.send("Server Home!")
})

// Routes
app.use('/api/books', booksRoutes)
app.use('/api/borrow', borrowRoute)

export default app