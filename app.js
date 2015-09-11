/*var app = angular.module('listaEmail', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
*/


var emailApp = angular.module('listaEmail', []);


emailApp.controller('CarrinhoController', ['$scope','$http', function($scope, $http){

    $scope.title = 'Lista de emails';


    $http.get('lista_email.json').success(function(data){

    	for (var i = 0; i < data.length ; i++){

    		if (data[i].assunto == "" || data[i].assunto == null)
    			data[i].assunto = "Sem assunto";    		

    		if (dateFormat(new Date(data[i].data_envio)) == dateFormat(new Date())){
    			data[i].data_envio = hourFormat(new Date(data[i].data_envio));
    		} else {
    			data[i].data_envio = dateFormat(new Date(data[i].data_envio));
    		}
    	}

        $scope.linha = data;



        //FUNCTIONS
        function dateFormat(obj){
        	var ano = obj.getFullYear();
			var mes = obj.getMonth() + 1 < 10 ? "0" + (obj.getMonth() + 1):obj.getMonth() + 1;
			var dia = obj.getDate() < 10 ? "0" + (obj.getDate()):obj.getDate();

			vDateFormata = dia + "/" + mes + "/" + ano;

			return vDateFormata;
        }

        function hourFormat(obj){
        	var hora = obj.getHours() < 10 ? "0" + (obj.getHours()):obj.getHours();
        	var minute = obj.getMinutes() < 10 ? "0" + (obj.getMinutes()):obj.getMinutes();

        	vHourFormat = hora + "h" + minute;

        	return vHourFormat;
        }

    });

}]);