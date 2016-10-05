var mongoose = require('mongoose');
var todoModel = mongoose.model('ToDo', {
    text: String
});