(function () {
    angular
        .module('sabioDemoApp')
        .controller('DemoController', DemoController);

    DemoController.$inject= ['$scope'];

    function DemoController($scope) {

        var vm = this;

        vm.firstName = "Jose";
        vm.lastName = "Petras";

    };


})();