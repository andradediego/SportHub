// create express object from express module
let express = require('express');

const path = require('path');

// create body parser object from body-parser package
let bodyParser = require('body-parser');

// call express constructor to create express application object
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/login', (req, res) => {     
	return res.json('It is working');
});


// create the web server running on hard coded port 3000
let server = app.listen(3000, function () {
    console.log('Application running on localhost:3000');
});