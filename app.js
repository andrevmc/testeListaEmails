/*var app = angular.module('listaEmail', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
*/


var emailApp = angular.module('listaEmail', []);


emailApp.controller('CarrinhoController', ['$scope','$http', function($scope, $http){
    $scope.title = 'Lista de emails';


    $http.get('lista_email.json').success(function(data){

    	// console.log(data);

    	for (var i = 0; i < data.length ; i++){
    		if (data[i].assunto == "" || data[i].assunto == null){
    			data[i].assunto = "Sem assunto";
    			// console.log (data[i]);
    		}
    	}

        $scope.linha	= data;

    });

}]);