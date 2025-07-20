import express, { Application, Request, Response } from 'express';
import { booksRoutes } from './app/controllers/book.controller';
import { borrowRoute } from './app/controllers/borrow.controller';

const app: Application = express()
app.use(express.json())

// Routes
app.use('/api/books', booksRoutes)
app.use('/api/borrow', borrowRoute)

// Display api root 
app.get('/', (req: Request, res: Response) => {
   res.send("Server Home!")
})

export default app