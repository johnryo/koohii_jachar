const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8888;

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
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

// Enable variables in ejs templates
app.locals.kanjis = [];
app.locals.kanas = [];
app.locals.req = [];
app.locals.userQuery = [];

app.listen(port, () => console.log(`Server is up on port ${port}.`));
