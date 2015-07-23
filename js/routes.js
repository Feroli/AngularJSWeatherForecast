weatherApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })

    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'ForecastController'
    })

    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'ForecastController'
    })

    .when('/forecastDaily/:days', {
        templateUrl: 'pages/forecastDaily.html',
        controller: 'Forecast2Controller'
    })

});
