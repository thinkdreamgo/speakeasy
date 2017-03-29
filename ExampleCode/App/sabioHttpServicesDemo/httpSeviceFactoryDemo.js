(function () {
    'use strict';
    angular
        .module('classifiedApp')
        .factory('classifiedsFactory', classifiedsFactory);

    classifiedsFactory.$inject = ['$http'];

    function classifiedsFactory($http) {

        return {
            getClassifieds: getClassifieds
        }

        function getClassifieds() {


            return $http.get('/SabioExampleCode/data/classifieds.json')

        }

    }



})();