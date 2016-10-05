var userController = require('../controller/user.controller');


function userRoutes(app) {
   
    app.post('/api/user/signUp', userController.registerUser);
    app.delete('/api/delete/user', userController.deleteUser);
}

function todoRoutes(app) {
    app.get('/api/todos', function (req, res) {
        userController.getTodos(req, res);
    });
    
    app.post('/api/todos', function (req, res) {
        var todoModel = mongoose.model('ToDo');
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

}


module.exports = function (app) {

    userRoutes(app);
    todoRoutes(app);
};



