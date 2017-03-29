(function () {
    angular.module(sabio.APPNAME)
        .factory('BlogService', BlogService)

    BlogService.$inject = ['$http']
    function BlogService($http) {
        return {
            insert: (data) => {
                return $http.post('/api/blog', data)
            },
            getById: (id) => {
                return $http.get(`/api/blog/${id}`)
            },
            getAll: () => {
                return $http.get('/api/blog')
            },
            update: (data) => {
                return $http.put(`/api/blogs/${id}`, data)
            },
            remove: (id) => {
                return $http.delete(`/api/blogs/${id}`)
            }
        }
    }
})()