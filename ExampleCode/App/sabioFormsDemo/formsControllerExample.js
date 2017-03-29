(function () {
    'use strict';

    angular
        .module('validationFormApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {

        var vm = this;

        vm.submitForm = submitForm;

        function submitForm(isValid) {
            if (isValid) {
                console.log("data is valid! go save this object -> ");
            } else {
                console.log("form submitted with invalid data :(")
            }
        };
    };

})();