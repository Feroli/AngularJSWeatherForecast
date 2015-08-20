/**
 * Created by Feroli on 13/08/2015.
 */
weatherApp.directive('weatherReport', function () {

    return {
        restrict: 'AEC',
        templateUrl: 'templates/24Hour.html',
        replace: true,
        scope: {

            weatherDay: "=",
            convertToStandard: "&convertToStandard",
            convertToDate: "&convertToDate",
            dateFormat: "@"

        }

    }


});