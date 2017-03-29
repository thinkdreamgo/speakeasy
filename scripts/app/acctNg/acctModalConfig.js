(function () {
    'use strict';
    angular
        .module('speakeasy')
        .config(config);
        function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('acctModalForm', {
        url: '/modal',
        templateUrl: '/views/UserandAdminProfiles/acctModalForm.html',
        controller: 'acctController as acct',
        title: 'SpeakEasy | Home'
    })

     }
})();