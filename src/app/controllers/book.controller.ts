import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';

export const booksRoutes = express.Router()

// Create a book <API>
booksRoutes.post('/', async (req: Request, res: Response) => {
   try {
      const body = req.body;
      const book = await Book.create(body)

      res.status(201).json({
         success: true,
         message: "Book created successfully",
         data: book
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})

// Get all books <API>
booksRoutes.get('/', async (req: Request, res: Response) => {
   try {
      const book = await Book.find()

      res.status(201).json({
         success: true,
         message: "Books retrieved successfully",
         data: book
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})

// Get single book using ID <API>
booksRoutes.get('/:bookId', async (req: Request, res: Response) => {
   try {
      const bookId = req.params.bookId;
      const book = await Book.findById(bookId)

      res.status(201).json({
         success: true,
         message: "Books retrieved successfully",
         data: book
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})

// Update single book using ID & PUT method <API>
booksRoutes.put('/:bookId', async (req: Request, res: Response) => {
   try {
      const bookId = req.params.bookId;
      const updatedBook = req.body;
      const book = await Book.findByIdAndUpdate(bookId, updatedBook, { new: true })

      res.status(201).json({
         success: true,
         message: "Book updated successfully",
         data: book
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})

// Delete single book using ID <API>
booksRoutes.delete('/:bookId', async (req: Request, res: Response) => {
   try {
      const bookId = req.params.bookId;
      await Book.findByIdAndDelete(bookId)

      res.status(201).json({
         success: true,
         message: "Book deleted successfully",
         data: null
      })

   } catch (error: any) {
      res.status(400).json({
         success: false,
         message: "Validation failed",
         error
      })
   }
})