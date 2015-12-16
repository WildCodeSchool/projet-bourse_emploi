function offerService($http, $cookies) {
    return {
        getAll: function () {
            return $http.get('/api/offers', {
                headers: {
                    authorization: $cookies.get('wildfinder_token')
                }
            });
        },

        getOfferbyId: function (id) {
            return $http.get('/api/ffers/' + id, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        getOfferByUser: function (id) {
            return $http.get('/api/offers/users/' + id, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        create: function (data) {
            return $http.post('/api/offers', data, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        update: function (id, data, user) {
            return $http.put('/api/offers/' + id, data, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        },

        delete: function (id) {
            return $http.delete('/api/offers/' + id, {
                headers: {
                    authorization: $cookies.get('wildFinder_token')
                }
            });
        }
    }
};