const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
module.exports = app;
