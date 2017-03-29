  (function () {
            "use strict";

            angular.module("ModalDemoApp")
                .controller('modalController', ModalController);


        //	$uibModalInstance is coming from the UI Bootstrap library and is a reference to the modal window itself so we can work with it
		//	items is the array passed in from the main controller above through the resolve property

            ModalController.$inject = ['$scope',  '$uibModalInstance', 'items']

            function ModalController($scope, $uibModalInstance, items) {

                var vm = this;

               

                vm.$scope = $scope;
                vm.$uibModalInstance = $uibModalInstance;

                vm.modalItems = items;
                vm.selected = {
                    item: vm.modalItems[0]
                };
//	$uibModalInstance is used to communicate and send data back to main controller
                vm.ok = function () {
                    vm.$uibModalInstance.close(vm.selected.item);
                };

                vm.cancel = function () {
                    vm.$uibModalInstance.dismiss('cancel');
                };
            }
        })();