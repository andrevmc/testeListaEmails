/*var app = angular.module('listaEmail', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
*/


var emailApp = angular.module('listaEmail', []);


emailApp.controller('CarrinhoController', ['$scope','$http', function($scope, $http){
    $scope.title = 'Lista de emails';


    $http.get('lista_email.json').success(function(data){

        $scope.lista = data;

    });

}]);