/**
 * Created by Feroli on 13/08/2015.
 */
//24hr
weatherApp.controller('ForecastController', ['$scope', '$resource', '$stateParams', 'cityService', function ($scope, $resource, $stateParams, cityService) {

    $scope.city = cityService.city;
    $scope.oneAtATime = false;

    $scope.num = $stateParams.num || '9';

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.num
    });

    $scope.convertToCelsius = function (degK) {

        return Math.round(degK - 273.15);
    };

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000);

    }


}]);
