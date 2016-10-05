var userHelper = require('../helpers/user.helper');
var todHelper = require('../helpers/todo.controller.helper');
var mongoose = require('mongoose');
var ToDoModel = mongoose.model('ToDo');
var userModel = mongoose.model('User');

function getTodos(req, res) {


    ToDoModel.find({}, function (err, documents) {
        if (err) {
            res.send(err);
        }
        res.json(documents);
    });
}


function registerUser(req, res) {


    var user = new userModel();
    user.name = "chawla";
    user.save()
        .then(function (document) {
            res.json(document);
        }).catch(function (err) {
        winston.error("Error : ", err);
    });
}

function deleteUser(req,res) {
    userModel.findByIdAndRemove('57f4a930ef1e77164c33844c')
        .then(function (doc) {
            console.log("________________removed", doc)
        }).catch(function (err) {
            console.log("_____________error occurred")
    });

}


module.exports = {
    getTodos: getTodos,
    registerUser: registerUser,
    deleteUser:deleteUser
};