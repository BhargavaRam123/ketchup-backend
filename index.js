import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes.js";
dotenv.config({
  path: "./env",
});

const port = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "20mb",
  })
);

app.get("/", (req, res) => {
  console.log("clicked on home route");
  res.json({
    message: "clicked on home page",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log("server is listening on port 3001");
});
