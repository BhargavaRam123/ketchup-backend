import mongoose from "mongoose";
let userschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});
export const User = mongoose.model("User", userschema);
