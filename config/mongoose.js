var mongoose = require('mongoose');
var glob = require('glob');
var winston = require('winston');


var mongodb = function () {

    var db = mongoose.connect('localhost:27017/todoapp');
    mongoose.connection.once('open', function (err, connection) {
        winston.info("=========== mongo db connection opened =================")

    });
    var models = glob.sync('./app/models/**.js');
    models.forEach(function (model) {
        winston.log('info', 'Loading mongo models ...', model);
        require("." + model);
    });

    return db
};
module.exports = mongodb;

