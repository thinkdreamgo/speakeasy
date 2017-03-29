(function () {
    "use strict";

    angular
        .module('SabioApp', [])
        .controller('employeeController', EmployeeController);

    EmployeeController.$inject = ['$scope', "$employeeService"];

    function EmployeeController($scope, $employeeService) {

        //  controllerAs with vm syntax: https://github.com/johnpapa/angular-styleguide#style-y032

        var vm = this; //this points to a new {}
        vm.headingInfo = "Angular 101";
        vm.items = null;
        vm.selectedEmployee = null;

        vm.$employeeService = $employeeService;
        vm.$scope = $scope;

        //  bindable members (functions) always go up top while the "meat" of the functions go below: https://github.com/johnpapa/angular-styleguide#style-y033
        vm.receiveItems = _receiveItems;
        vm.selectEmployee = _selectEmployee;
        vm.onEmpError = _onEmpError;

        //-- this line to simulate inheritance
        // $baseController.merge(vm, $baseController);

        //this is a wrapper for our small dependency on $scope
        vm.notify = vm.$employeeService.getNotifier($scope);

        //this is like the sabio.startUp function
        render();

        function render() {
            //  defer data operations into an external service: https://github.com/johnpapa/angular-styleguide#style-y035
            vm.$employeeService.get(vm.receiveItems, vm.onEmpError);
        }

        function _receiveItems(data) {
            //this receives the data and calls the special
            //notify method that will trigger ng to refresh UI
            vm.notify(function () {
                vm.items = data.items;
            });
        }

        function _selectEmployee(anEmp) {
            console.log(anEmp);
            vm.selectedEmployee = anEmp;
        }

        function _onEmpError(jqXhr, error) {
            console.error(error);
        }
    }
})();