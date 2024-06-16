import { User } from "../models/user.model.js";
import { Todo } from "../models/todo.model.js";
export async function Storetodo(req, res) {
  try {
    const { email, messageid, name, description } = req.body;
    const todoi = await Todo.create({
      name,
      description,
      messageid,
    });
    // check whether the user exist if not create the user
    const userexists = await User.find({ email });
    if (userexists.length > 0) {
      // then add it to the array of todos
      const userupated = await User.findOneAndUpdate(
        { email },
        { $push: { todos: todoi._id } },
        { new: true }
      );
    } else {
      const userupdated = await User.create({ email });
      const val = await User.findOneAndUpdate(
        { email },
        { $push: { todos: todoi._id } }
      );
      //   userupdated.save();
    }
    res.json({
      message: "hey todo added to the database",
    });
  } catch (error) {
    console.log("error occured in storetodo function", error);
    res.json({
      error,
    });
  }
}
export async function retrievetodo(req, res) {
  const { email } = req.body;
  try {
    const val = await User.findOne({ email }).populate("todos");
    console.log("retrieved todos:", val);
    res.json({
      todos: val,
    });
  } catch (error) {
    console.log("error in retrievetodo", error);
  }
}

export async function deletetodo(req, res) {
  try {
    const { _id } = req.body;
    const val = await Todo.findOneAndDelete({ _id });
    res.json({
      val,
      messsage: "todo deleted",
    });
  } catch (error) {
    console.log("error occured in deletetodo function", error);
    res.json({
      error,
    });
  }
}
