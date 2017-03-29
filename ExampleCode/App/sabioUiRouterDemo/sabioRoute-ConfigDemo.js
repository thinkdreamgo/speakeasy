(function () {
    'use strict';

    angular
        .module('uiRouterapp')
        .config(config);

        function config ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'partial-home-Example.html'
                })

                .state('home.list', {
                    url: 'list',
                    templateUrl: 'partial-home-list-Example.html',
                    controller: MusicController
                })

                .state('home.paragraph', {
                    url: '/paragraph',
                    template: 'This is a string music may or may not follow!'
                })

        }

    function MusicController($scope) {
        $scope.musicGenres = ['folk', 'rock', 'reggae'];
    }


})();


