var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {

    $scope.formData = {};

    var getAll = function () {
        $http.get('/api/todos')
            .success(function (data) {
                console.log(")))))))))")
                $scope.todos = data;
                console.log("data :", data);
            })
            .error(function (err) {
                console.log("Error :", err);
            });

    };
    getAll();

    $scope.createTodo = function () {

        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.todos.push(data);
                console.log("Toido ", data)

            })
            .error(function (err) {
                console.log('Error : ', err);
            })
    };
    $scope.deleteToDo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {
                console.log("Delete Data : ", data);

                getAll();

            })
            .error(function (err) {
                console.log("Error ", err);
            })
    };

}