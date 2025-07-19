import { Server } from 'http';
import mongoose from "mongoose";
import app from "./app";

let server: Server
const PORT = 5000

async function main() {
   try {
      await mongoose.connect('mongodb+srv://todo:11223344@cluster0.rwhf0.mongodb.net/mongoose-node-app?retryWrites=true&w=majority&appName=Cluster0');

      server = app.listen(PORT, () => {
         console.log(`app is listion on port ${PORT}`);
      })
   } catch (error) {
      console.log('server error', error);
   }
}

main()