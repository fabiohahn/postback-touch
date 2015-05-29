angular.module('touch.controllers', [])

.controller('AvaliacaoCtrl', function($scope) {
	$scope.mostrarResultado = false;

	var inicializarContadores = function(){
		$scope.qtdVermelho = 0;
		$scope.qtdAmarelo = 0;
		$scope.qtdVerde = 0;	
	};
	inicializarContadores();
	
	$scope.resetarContadores = function(){
		inicializarContadores();
	};
});