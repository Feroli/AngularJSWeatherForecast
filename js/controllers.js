//CONTROLLERS

weatherApp.controller('HomeController', ['$scope', '$route', '$resource', '$location', 'cityServices', function ($scope, $route, $resource, $location, cityServices) {

    $scope.city = cityServices.city;
    $scope.$watch('city', function () {
        cityServices.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");                
    };


}]);

weatherApp.controller('ForecastController', ['$scope', '$route', '$resource', '$routeParams', 'cityServices', function ($scope, $route, $resource, $routeParams, cityServices) {

    $scope.city = cityServices.city;

    $scope.days = $routeParams.days || '9';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days
    });


    $scope.convertToCelsius = function (degK) {

        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000);

    }




}]);

weatherApp.controller('Forecast2Controller', ['$scope', '$route', '$routeParams', 'cityServices', 'weatherService', function ($scope, $route, $routeParams, cityServices, weatherService) {

    $scope.city = cityServices.city;

    $scope.days = $routeParams.days || '3';


    $scope.weatherResult = weatherService.GetWeather( $scope.city, $scope.days);


    $scope.convertToCelsius = function(degK) {

        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000);

    }




}]);
