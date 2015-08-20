/**
 * Created by Feroli on 13/08/2015.
 */
weatherApp.controller('SearchController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

    $scope.city = cityService.city;


    $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';


    $scope.submit = function () {
        $location.path("/forecast");
    };


    $scope.result2 = '';
    $scope.options2 = {
        country: 'ca',
        types: '(cities)'
    };
    $scope.details2 = '';


    $scope.result3 = '';
    $scope.options3 = {
        country: 'gb',
        types: 'establishment'
    };
    $scope.details3 = '';


}]);