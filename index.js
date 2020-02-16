const express = require('express');
const routes = require('./routes/api');
//const bodyParser = require('body-parser');
const formdataParser = require('multer')().fields([]);
const mongoose = require('mongoose');

// Setting Express app
const app = express();

//Connect to mongodb
//mongoose.connect('mongodb://localhost/payment');
mongoose.connect('mongodb+srv://alexy:hana9753A@cluster0-iyeno.mongodb.net/test?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

//Receive json or urlencoded data
/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());*/
app.use(formdataParser);

// Initialize routes
app.use('/api', routes);

// Error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
});

// Listening requests
app.listen(process.env.port || 4000, function() {
    console.log("Now listening for requests");
});
