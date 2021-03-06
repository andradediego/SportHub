require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const path = require('path');

// create body parser object from body-parser package
const bodyParser = require('body-parser');

// call express constructor to create express application object
const app = express();

// imports of routes
const login = require('./routes/login');
const profile = require('./routes/profile');
const fields = require('./routes/fields');
const bookingField = require('./routes/bookingFields');
const efields = require('./routes/editFields');
const calendar = require('./routes/calendar');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// set the cors
app.use(cors({
	credentials: true,
	origin: ['http://localhost:3000', 'http://localhost:8080']
}));

//set the routes
//app.use('/api/bookingField, const import route)
app.use('/api/fields', fields);
app.use('/api/bookingField', bookingField);
app.use('/api/login', login);
app.use('/api/fieldsEdit', efields);
app.use('/api/profile', profile);
app.use('/api/calendar', calendar);


// create the web server running on hard coded port 3000
const server = app.listen(3000, function () {
    console.log('Application running on localhost:3000');
});