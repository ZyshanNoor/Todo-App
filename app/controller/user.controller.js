var userHelper = require('../helpers/user.helper');
var todHelper = require('../helpers/todo.controller.helper');
var mongoose = require('mongoose');
var ToDoModel = mongoose.model('ToDo');
var userModel = mongoose.model('User');
var winston = require('winston');
function getTodos(req, res) {

    ToDoModel.find({}, function (err, documents) {
        if (err) {
            res.send(err);
        }
        res.json(documents);
    });
}


function registerUser(req, res) {
    var name = String(req.body.name);
    var password = String(req.body.password);

    // var nameExpressionPattern = new RegExp('\w');
    // //
    // // if (!nameExpressionPattern.test(name)) {
    // //     return   res.send("your String is InSecure");
    // // }

    var user = new userModel();
    user.name = name;
    user.password = password;
    user.save()
        .then(function (document) {
            res.json(document);
        }).catch(function (err) {
        winston.error("Error : ", err);
    });
}

function deleteUser(req, res) {
    userModel.findByIdAndRemove(req.body.id)
        .then(function (doc) {

        }).catch(function (err) {

    });

}

function findUser(req, res) {

    var name = String(req.body.name);

    userModel.findOne({name: name})
        .then(function (doc) {
            res.send(doc);

        }).catch(function (err) {
        console.log(err);
    });

}


module.exports = {
    getTodos: getTodos,
    registerUser: registerUser,
    deleteUser: deleteUser,
    findUser: findUser

};