import { User } from "../models/user.model";
export async function login(req, res) {
  try {
    let { email, accesstoken } = req.body;

    let isuserexists = await User.find({ email });

    if (isuserexists.length === 0) {
      let user = await User.create({
        email,
        accesstoken,
      });
      return res.status(200).json({
        message: "stored in db",
      });
    }
    // stopped hered

    if (resu) {
      const token = jwt.sign(
        {
          email: isuserexists[0].email,
        },
        process.env.JWT_SECRET
      );
      isuserexists.token = token;
      isuserexists.password = undefined;
      return res.status(200).json({
        success: true,
        token: token,
        isuserexists,
        message: "successfully logged in and token is generated",
      });
    } else {
      return res.status(400).json({
        message: "please check your entered password",
      });
    }
  } catch (error) {
    console.log("error in login function:", error.message);
    return res.status(400).json({
      message: "something went wrong in login function",
    });
  }
}
