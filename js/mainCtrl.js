angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){

$scope.quotes = mainService.quoteGetter();

$scope.add = mainService.add;

$scope.removeQuote = mainService.removeQuote;

$scope.save = mainService.save;

$scope.load = mainService.load;

})
