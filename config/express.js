var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var winston = require('winston');
var chalk = require('chalk');




module.exports = function (mongoose) {
    var app = express();
    app.use(express.static(__dirname + '/public'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    app.use(methodOverride());

     require('../app/routes/user.routes.js')(app);

   
    app.get('/', function (req, res, next) {
        res.send('Welcome to the server root');


    });


    

   
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });
    app.listen(3000);
    winston.log('info',chalk.green('Application started at port 3000'))

    return app
};