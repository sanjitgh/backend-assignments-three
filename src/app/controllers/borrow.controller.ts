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

      // Deduct copy
      book.copies -= quantity;

      // Update availability using instance method 
      book.updateAvailability();
      await book.save()

      // Save the borrow record
      const borrow = await Borrow.create({ book: bookId, quantity, dueDate })

      res.status(201).json({
         success: true,
         message: "Book borrowed successfully",
         data: borrow
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: error.message || "Validation failed",
      })
   }
})

// Get borrow using aggregate <API>
borrowRoute.get('/', async (req: Request, res: Response) => {
   try {
      const borrow = await Borrow.aggregate([
         {
            $group: {
               _id: '$book',
               totalQuantity: { $sum: "$quantity" }
            }
         },
         {
            $lookup: {
               from: 'books',
               localField: '_id',
               foreignField: '_id',
               as: 'bookDetails'
            }
         },
         {
            $unwind: '$bookDetails'
         },
         {
            $project: {
               _id: 0,
               book: {
                  title: '$bookDetails.title',
                  isbn: '$bookDetails.isbn'
               },
               totalQuantity: 1
            }
         }
      ])

      res.status(200).json({
         success: true,
         message: "Book borrowed successfully",
         data: borrow
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: error.message || "Validation failed",
      })
   }
})