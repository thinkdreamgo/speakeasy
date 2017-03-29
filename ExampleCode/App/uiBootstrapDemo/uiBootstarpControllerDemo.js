 (function () {
     "use strict";

     angular
         .module("ModalDemoApp")
         .controller('MainController', MainController);

     MainController.$inject = ['$scope', '$uibModal'];

     function MainController($scope, $uibModal) {


         var vm = this;
         vm.$uibModal = $uibModal;

         //  modal directive
         vm.modalSelected = null;
         vm.modalItems = ['item1', 'item2', 'item3'];

         //  carousel directive
         vm.carouselInterval = 5000;
         vm.slides = [];
         vm.noWrapStyle = false;
         vm.active = 0;
         vm.currIndex = 0;
         vm.addSlide = addSlide;
         //  vm.fireAlert = _fireAlert;
         vm.openModal = _openModal;


         //carousel
         for (var i = 0; i < 4; i++) {
             vm.addSlide();
         }

         function addSlide() {
             var newWidth = 600 + vm.slides.length + 1;
             vm.slides.push({
                 image: 'http://fillmurray.com/g/' + newWidth + '/300',
                 text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][vm.slides.length % 4],
                 id: vm.currIndex++
             });
         };


         // modal

         function _openModal() {
             vm.$uibModal.open({
                 animation: true,
                 templateUrl: 'modalContent.html', //	this tells it what html template to use. it must exist in a script tag OR external file
                 controller: 'modalController', //	this controller must exist and be registered with angular for this to work
                 controllerAs: 'mc', // this creates the controller as syntax
                 size: 'sm',
                 resolve: { //	anything passed to resolve can be injected into the modal controller as shown below
                     items: function () {
                         return vm.modalItems;
                     }
                 }
                 //	when the modal closes it returns a promise
             }).result.then(function (selectedItem) {
                 vm.modalSelected = selectedItem; //	if the user closed the modal by clicking Save	
             }, function () {
                 console.log('Modal dismissed at: ' + new Date()); //	if the user closed the modal by clicking cancel
             });
         }
     }

 })();