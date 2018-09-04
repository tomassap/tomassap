const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const passport = require("passport");

const appointments = require("./routes/api/appointments");
const featuredImages = require("./routes/api/featuredImages");
const posts = require("./routes/api/posts");
const profiles = require("./routes/api/profile");
const users = require("./routes/api/users");
const emails = require("./routes/api/emails");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// use routes
app.use("/api/appointments", appointments);
app.use("/api/featureImages", featuredImages);
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/profile", profiles);
app.use("/api/emails", emails);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
