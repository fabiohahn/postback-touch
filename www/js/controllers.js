angular.module('touch.controllers', [])

.controller('AvaliacaoCtrl', function($scope, $ionicActionSheet, $timeout, $ionicPopup) {
	$scope.mostrarResultado = false;

	var inicializarContadores = function(){
		$scope.qtdVermelho = 0;
		$scope.qtdAmarelo = 0;
		$scope.qtdVerde = 0;
	};
	inicializarContadores();

	$scope.contar = function(tipo){
		destacarFeedbackRecebido();
		$scope[tipo]++;
	};

	var destacarFeedbackRecebido = function(){
		console.log("Destacar cor do feedback recebido");
		//TODO: toogleClass para trocar de cor
	};

	$scope.mostrarDetalhes = function() {
		$scope.mostrarResultado = true;

		var hideSheet = $ionicActionSheet.show({
	     titleText: 'Options',
	     buttons: [
	       { text: 'Save' }
	     ],
	     buttonClicked: function(index) {
	       $ionicPopup.alert({
		     title: 'Save Success'
		   });
		   esconderResultados();
	       return true;
	     },
	     destructiveText: 'Reset',
	     destructiveButtonClicked: function(){
	     	inicializarContadores();
	     	esconderResultados();
	     },
	     cancelText: 'Cancel',
	     cancel: function() {
			esconderResultados();
	     }
	   });
 	};

 	var esconderResultados = function(){
		$scope.mostrarResultado = false;
	};
});