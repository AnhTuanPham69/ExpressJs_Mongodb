require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const db = require("./config/db/connect");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const wikiRouter = require("./src/routes/wiki");
const catalogRouter = require('./src/routes/catalog'); 

const app = express();

// Connect to database
db.connect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/wiki", wikiRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

module.exports = app;
