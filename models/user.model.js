import mongoose from "mongoose";
let userschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  accesstoken: {
    type: String,
    required: true,
  },
});
export const User = mongoose.model("User", userschema);
