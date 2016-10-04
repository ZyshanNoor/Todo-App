var express = require('express');
var app = express();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var mongoose = require('./config/mongoose');

app.use(function (req, res, next) {
    mongoose = require('./config/mongoose');

});


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.get('/', function (req, res, next) {
    res.send('Welcome to the server root');


});

app.listen(3000);


app.get('/api/todos', function (req, res) {
    console.log("__________");
    var user = mongoose.model('User');
    console.log("++++++");

    user.find({}, function (err, documents) {
        if (err) {
            res.send(err);
        }
        res.json(documents);

    })
});

app.post('/api/todos', function (req, res) {
    todoModel.create({
        text: req.body.text,
        done: false
    }, function (err, documentSaved) {
        if (err) {
            res.send(err);
        }
        res.json(documentSaved);
    });

});

app.delete('/api/todos/:todo_id', function (req, res) {
    todoModel.remove({_id: req.params.todo_id}, function (err, documentDeleted) {
        if (err) {
            res.send(err)
        }
        res.json(documentDeleted);
    });
});
app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
});
console.log('Application started at port 3000');



