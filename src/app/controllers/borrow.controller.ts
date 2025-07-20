import express, { Request, Response } from 'express';
import { Borrow } from '../models/borrow.model';
import { Book } from '../models/book.model';

export const borrowRoute = express.Router()


// Create a borrow <API>
borrowRoute.post('/', async (req: Request, res: Response) => {
   try {
      const { book: bookId, quantity, dueDate } = req.body;

      // Check the book is exist
      const book = await Book.findById(bookId)

      if (!book) throw new Error("Book is not found!")

      // Check the book has enough quantity
      if (book?.copies < quantity) {
         throw new Error("Not enough copies available")
      }



      const borrow = await Borrow.create({ book, quantity, dueDate })

      res.status(201).json({
         success: true,
         message: "Book borrowed successfully",
         data: borrow
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})