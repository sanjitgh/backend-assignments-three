import mongoose from "mongoose";

export interface borrowInterface {
   book: mongoose.Types.ObjectId,
   quantity: number,
   dueDate: Date
}