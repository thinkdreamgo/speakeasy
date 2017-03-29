(function () {
    'use strict';
    angular
        .module('speakeasy')
        .controller('modalController', modalController);
        // .component('modalComponent', {
        //     templateUrl: 'ChooseYourAdventure.html',
        //     bindings: {
        //         resolve: '<',
        //         close: '&',
        //         dismiss: '&'
        //     }
        // })


    modalController.$inject = ['$uibModalInstance']

    function modalController($uibModalInstance) {
        var vm = this;
       // vm.$scope = $scope;

        vm.cancel = cancel;
        console.log($uibModalInstance);

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };
    }


})();