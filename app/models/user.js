var mongoose = require('mongoose');
var UserModel = mongoose.model('User', {
    name: String,
    firstName: String,
    lastName: String,
    password: String
});