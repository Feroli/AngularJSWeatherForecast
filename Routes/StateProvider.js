/**
 * Created by Feroli on 13/08/2015.
 */
weatherApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/search.html',
            controller: 'SearchController'
        })
        .state('forecast', {
            url: '/forecast',
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .state('forecastWithNum', {
            url: '/forecast/:num',
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .state('forecastDaily', {
            url: '/forecastDaily/:num',
            templateUrl: 'pages/forecastDaily.html',
            controller: 'ForecastControllerDaily'
        });

}]);




