const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 8888;

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Local MongoDB
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB is connected.'))
.catch(err => console.log(err));

// EJS
app.set('view engine', 'ejs');

// Body Parser
app.use(express.urlencoded({ extended: true }));

// Static Assets
app.use(express.static('public'));

// Set Routes
app.use('/', require('./routes/index'));

// Expose variables to ejs templates
app.locals.kanjis = [];
app.locals.kanas = [];

app.listen(port, () => console.log(`Server is up on port ${port}.`));
