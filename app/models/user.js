var mongoose = require('mongoose');
console.log("hahaha");
var UserModel = mongoose.model('User', {
    name: String,
    firstName: String,
    lastName: String
});