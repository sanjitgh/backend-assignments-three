import express, { Application, Request, Response } from 'express';
import { booksRoutes } from './app/controllers/book.controller';

const app: Application = express()
app.use(express.json())

app.use('/api/books', booksRoutes)

// Display api root 
app.get('/', (req: Request, res: Response) => {
   res.send("Server Home!")
})

export default app