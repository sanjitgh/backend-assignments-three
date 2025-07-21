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
      min: [0, 'Copies must be a positive number'],

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

// Instance Method 
bookSchema.methods.updateAvailability = function () {
   this.available = this.copies > 0
}

// Pre-save middlewere
bookSchema.pre('save', function (next) {
   this.available = this.copies > 0;
   next()
})

// Post-save middlewere
bookSchema.post('save', function (doc) {
   console.log(`Book "${doc.title}" saved successfully.`);
})


export const Book = model<BookInterface>("Book", bookSchema)