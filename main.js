import express from "express";
import movieRoute from "./routes/movies.route.js";
import connectDb from "./lib/db.js";

const app = express();

const port = 5000;

//Connecting Database
connectDb();

app.get("/", (req, res) => {
  res.json({ msg: "hello worlds" });
});

app.get("/hi", (req, res) => {
  res.json({ response: "you are connected" });
});

app.use("/movies", movieRoute);

//Writing
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});

//Dry Principle
//KISS principle
