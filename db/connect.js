import mongoose from "mongoose";
export default async function connect() {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://ketchup:${process.env.passdb}@cluster0.4rgnail.mongodb.net/quoteimageapp`
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error occured in storetodo function", error);
  }
}
