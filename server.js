const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB Config
const db = require("./config/kyes").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on port ${port}`));
