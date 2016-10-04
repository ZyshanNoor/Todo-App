var mongoose = require('mongoose');
var glob = require('glob');
var winston = require('winston');




var mongodb = function () {

    var db = mongoose.connect('localhost:27017/todoapp');
    mongoose.connection.on('open',function (err,connection) {
       winston.info("=========== mongo db connection opened =================")

    });
    glob("./app/models/**.js", function (er, models) {
        console.log(models);
        winston.log('info','Loading mongo models ...');
        models.forEach(function (model) {
            require("."+model);
        });
        console.log(__dirname)
    });


    return db
}();
module.exports = mongodb;

