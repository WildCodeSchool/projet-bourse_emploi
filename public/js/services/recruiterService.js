function recruiterService($http, $cookies) {
    return {
        getAll: function () {
            return $http.get('/api/users/recruiters', {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        getRecruiterById: function (id) {
            return $http.get('/api/recruiters/' + id, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        create: function (data) {
            return $http.post('/api/recruiters', data);
        },

        checkMail: function (email) {
            return $http.get('/api/recruiters/email', {
                headers: {
                    'email': email
                }
            });
        },

        update: function (id, data) {
            return $http.put('/api/recruiters/' + id, data, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        like: function (id, data) {
            return $http.put('api/like/recruiters/' + id, data, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        unlike: function (id, data) {
            return $http.put('api/unlike/recruiters/' + id, data, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        delete: function (id) {
            return $http.delete('/api/recruiters/' + id, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        }
    }
};