(function (){

    'use strict';
   

   angular
    .module("speakeasy")
    .factory("acctFactory", acctFactory);
   
    acctFactory.$inject= ["$http"];

   function acctFactory ($http){

    var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'
       
       var service= {
            postAcct: postAcct
            //getUserArticle: getUserArticle
        }
        return service;

        function postAcct(data) {
            return $http.post(urlPrefix + 'api/users/register/', data,{withCredentials:true})
        }

        // function getUserArticle(){
        //     return $http.get(urlPrefix +'api/Articles/', {withCredentials:true})
        // }


   }
   

})();