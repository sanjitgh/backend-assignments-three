import { model, Schema } from "mongoose";
import { BookInterface } from "../interfaces/book.interface";

// Create mongoose Schema for Book validation
const bookSchema = new Schema<BookInterface>({
   title: {
      type: String,
      required: true
   },
   author: {
      type: String,
      required: true
   },
   genre: {
      type: String,
      required: true,
      enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
   },
   isbn: {
      type: String,
      required: true,
      unique: true
   },
   description: {
      type: String,
   },
   copies: {
      type: Number,
      required: true,
      min: [0, 'Copies must be a positive number, got {VALUE}'],

   },
   available: {
      type: Boolean,
      default: true
   },
},
   {
      versionKey: false,
      timestamps: true
   }
)

export const Book = model("Book", bookSchema)