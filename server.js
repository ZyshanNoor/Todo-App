var express = require('./config/express');
var mongoose = require('./config/mongoose');
var chalk = require('chalk');
var winston = require('winston');
var db = mongoose();
var app = express(db);
passport = require('./config/passport')();


app.listen(3000);
winston.log('info', chalk.green('Application started at port 3000'))
module.exports = app;




