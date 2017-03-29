
(function () {
    "use strict";


    angular.module('GeoCodeDempApp')
                  .controller('geoController', GeoController);

    GeoController.$inject = ['$scope'];

    function GeoController($scope) {

        var vm = this;
       
        vm.submitAddressForm = _submitAddressForm;

        //  initialize our data and other properties for this page
        vm.address = {
            //address1: "400 Corporate Pointe Drive",
            //city: "Culver City",
            //state: "CA",
            //zip:90291
        };
        vm.geocoder = null;
        vm.map = null;
        vm.addressId = null;
        vm.geocodeResponse = null;

        //  invoke the initialize function to setup the map for this page
        _initialize()

        function _initialize() {
            vm.geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(34.263773, -118.425187);
            var mapOptions = {
                zoom: 19,
                center: latlng
            }
            vm.map = new google.maps.Map($('#map-canvas')[0], mapOptions);
        }

        function _submitAddressForm() {

            var addressString = vm.address.address1 + " " + vm.address.city + " " + vm.address.state + " " + vm.address.zip;

            _codeAddress(addressString);
        }

        function _codeAddress(address) {
            console.log("address string -> ", address);

            vm.geocoder.geocode({ 'address': address }, _onCodeAddress);
        }

        function _onCodeAddress(results, status) {
            //vm.notify(function () {
            //    vm.geocodeResponse = JSON.stringify(results, null, "     ");
            //});

            if (status == google.maps.GeocoderStatus.OK) {

                var geometry = results[0].geometry;
                var loc = geometry.location;

                console.log("got location data from API", loc);

                vm.map.setCenter(loc);

                var marker = new google.maps.Marker({
                    map: vm.map,
                    position: loc
                });

                if (geometry.viewport)
                    vm.map.fitBounds(geometry.viewport);

                var lat = loc.lat();
                var lon = loc.lng();

                console.log("found coordinates in reply -> (%s, %s)", lat, lon);

                vm.address.latitude = lat;
                vm.address.longitude = lon;

                _saveAddress();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        }

        function _saveAddress() {
            if (vm.addressId && vm.addressId.length > 0) {
                console.log("UPDATE address data", vm.address);
            }
            else {
                console.log("CREATE address data", vm.address);
            }
        }
    }


})();