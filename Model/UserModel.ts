import mongoose, { model, Schema, Document } from "mongoose";

interface data {
  email: string;
  fullName: string;
  stack: string;
  password: string;
}

// model

interface Idata extends data, mongoose.Document {}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an email"],
      lowercase: true,
      trim: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: [true, "Please Enter your full name"],
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
      min: [6, "Please enter at least 6 characters"],
    },
  },
  { timestamps: true }
);

const UserModel = model<Idata>("users", UserSchema);

export default UserModel;