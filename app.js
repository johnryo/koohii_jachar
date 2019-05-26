const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 8888;

// Connect to Local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/jachar', { useNewUrlParser: true })
.then(() => console.log('Local MongoDB is connected.'))
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

app.listen(port, () => console.log(`Server is up on port ${port}.`));
