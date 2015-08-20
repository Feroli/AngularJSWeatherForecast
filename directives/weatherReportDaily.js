/**
 * Created by Feroli on 13/08/2015.
 */
weatherApp.directive("weatherReportDaily", function(){

    return {
        restrict: 'E',
        templateUrl: 'templates/ThreeDays.html',
        replace: true,
        scope: {

            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"

        }

    }
});