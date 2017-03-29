(function () {
    angular.module(sabio.APPNAME)
        .factory('CommentService', CommentService)

    CommentService.$inject = ['$http']
    function CommentService($http) {
        return {
            get: () => {
                return $http.get('./data/comments.js')
            }
        }
    }
})()