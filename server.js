const express = require('express');

const mongoose = require('mongoose');

const appointments = require('./routes/api/appointments');
const featuredImages = require('./routes/api/featuredImages');
const posts = require('./routes/api/posts');


const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send('Hey'));

// use routes
app.use('/api/appointments', appointments);
app.use('/api/featureImages', featuredImages);
app.use('/api/posts', posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
