import mongoose, { connection } from "mongoose";


const lifeUrl: string = "";
const localUrl: string = "mongodb://localhost/AuthSystem";
mongoose.connect(localUrl);
mongoose.connection
  


export default async function DataBaseFunction() {
  try {
    const connect = await mongoose.connect(localUrl);
    console.log("connected to", localUrl);
  } catch (error) {
    console.log("An error occured in DB", error);
  }
}