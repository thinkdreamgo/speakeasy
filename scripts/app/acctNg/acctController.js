(function () {

    'use strict';
    angular
        .module("speakeasy")
        .controller("acctController", acctController);

    acctController.$inject = ['$scope', "$http", '$uibModal', "acctFactory"];

    function acctController($scope, $http, $uibModal, acctFactory) {
        var vm = this;

        vm.userAcct = userAcct;
        vm.updateForm = updateForm;
        // vm.userboard = userboard;
        vm.blogData = blogData;
        vm.showAcctModal = showAcctModal;
        vm.$uibModal=$uibModal;

        // activate();

        // function activate(){
        //     userBlogFactory.getUserArticle().then(blogData);

        // }


        function blogData(data) {
            vm.items = data.data.items;
            console.log(data.data.items);
        }

        function updateForm() {

            var form = {
                firstName: vm.userAcct.firstName,
                lastName: vm.userAcct.lastName,
                email: vm.userAcct.email,
                password: vm.userAcct.password


            }
            acctFactory.postAcct(form).then(userAcct);


        }


        function showAcctModal() {
            vm.$uibModal.open({
                animation: true,
                templateUrl: '/views/UserandAdminProfiles/acctModalForm.html',
                controller: 'acctController',
                controllerAs: 'acct',
                size: 'md',
                resolve: {
                    items: function () {
                        return vm.modalItems;
                    }
                }
            })
        }











        function userAcct(response) {
            vm.users = response.data.item;
            sessionStorage.setItem("user", response.data.item);
            showAcctModal();
            window.location.replace('acctModalForm');
            // console.log(response.data.item);


            //   $state.go('UserDashboard');

            // if (response.data.item === true) {
            //     window.location.replace = 'http://localhost:8080/views/Speakeasy.html#/UserDashboard';
            //     console.log(data);
            // } else {
            //     console.log("error");
            // };



        }


    }

})();