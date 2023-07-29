const express = require("express");
const routes = require("./routes/tasks.routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks", routes);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listening on port:", port);
    });
  } catch (err) {
    console.log("error:", err);
  }
};
start();
