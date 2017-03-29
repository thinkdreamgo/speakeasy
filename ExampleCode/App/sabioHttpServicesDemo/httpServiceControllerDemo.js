(function () {
    'use strict';

    angular
        .module('classifiedApp')
        .controller('classifiedsController', ClassifiedsController);

    ClassifiedsController.$inject = ['$scope', '$http', 'classifiedsFactory'];

    function ClassifiedsController($scope, $http, classifiedsFactory) {

        var vm = this;
        vm.totalItems = 64;
        vm.currentPage = 1;

        vm.setPage = setPage;
        //vm.pageChanged =  pageChanged;
        vm.maxSize = 5;
        vm.bigTotalItems = 175;
        vm.bigCurrentPage = 1;

        vm.ClassifiedsData = ClassifiedsData;

        classifiedsFactory.getClassifieds().then(ClassifiedsData);

        function ClassifiedsData(classifieds) {
            vm.classifieds = classifieds.data
        }

        function setPage(pageNo) {
            vm.currentPage = pageNo;
        };

    }
})();





//function pageChanged () {
//        $log.log('Page changed to: ' + $scope.currentPage);
//    };


