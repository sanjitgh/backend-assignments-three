import { Server } from 'http';
import mongoose from "mongoose";
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

let server: Server;
const PORT = 5000;

async function main() {
   try {
      await mongoose.connect(process.env.MONGODB_URL as string);

      server = app.listen(PORT, () => {
         console.log(`app is listion on port ${PORT}`);
      })
   } catch (error) {
      console.log('server error', error);
   }
}

main()