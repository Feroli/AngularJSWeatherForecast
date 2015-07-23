// DIRECTIVES
weatherApp.directive("weatherReport", function(){

    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
            
        }
    
    }
});

weatherApp.directive("weatherReportDaily", function(){

    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReportDaily.html',
        replace: true,
        scope: {
            
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
            
        }
    
    }
});