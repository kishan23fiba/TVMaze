angular.module('search.controller', [])
	.directive('rendersearch',function(){
		return{
			restrict: 'EA', //calling it as an element or attribute
			templateUrl: 'views/searchresults.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
		$scope.search=function(){
			SearchService.query({q: $scope.name}, function(response){
					$scope.characters=response;
			});
		};
});