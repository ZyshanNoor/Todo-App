var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var winston = require('winston');
var chalk = require('chalk');
var session = require('express-session');
var passport = require('passport');



module.exports = function (mongoose) {
    var app = express();

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    app.use(methodOverride());
    app.use(passport.initialize());
    app.use(passport.session());
    app.set('views','./app/views');
    app.set('view engine', 'ejs');

        
    require('../app/routes/user.routes.js')(app);

    app.get('/', function (req, res, next) {
        // res.send('Welcome to the server root');
        res.render('index');


    });


    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });
    app.use(express.static(__dirname + '/public'));
 

    return app
};