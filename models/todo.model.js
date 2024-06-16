import mongoose from "mongoose";
let todoschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  messageid: {
    type: String,
    required: true,
  },
});
export const Todo = mongoose.model("Todo", todoschema);
