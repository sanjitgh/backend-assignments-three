import { model, Schema } from "mongoose";
import { borrowInterface } from "../interfaces/borrow.interface";

const borrowShcema = new Schema<borrowInterface>({
   book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true
   },
   quantity: {
      type: Number,
      required: true,
      min: 1
   },
   dueDate: {
      type: Date,
      required: true,
   },
},
   {
      timestamps: true,
      versionKey: false
   }
)


export const Borrow = model("Borrow", borrowShcema)