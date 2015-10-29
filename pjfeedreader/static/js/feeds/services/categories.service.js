/**
 * Categories
 * @namespace feed.feeds.services
 */

(function () {
    'use strict';

    angular
        .module('pjfeedreader.feeds.services')
        .factory('Categories', ['$http', Categories]);

    /**
     * @namespace Categories
     * @returns {Factory}
     */

    function Categories($http) {
        var Feeds = {
            add: add,
            all: all
        };
        return Feeds;
	
        /**
         * @name add
         * @desc Add new feed
         * @param
         * @returns {Promise}
         * @memberOf pjfeedreader.feeds.services.Feeds
         */

        function add(url, title) {
            return $http.post('/feedreader/api/v1/categories/', {
                'url': url,
                'title': title
            }).then(addCategorySuccessFn, addCategoryErrorFn);
        }
	
        /**
         * @name addCategorySuccessFn
         * @desc Show success message
         */

        function addCategorySuccessFn(data, status, headers, config) {
            console.log('Adding feed succesfully');
        }

        /**
         * @name addCategoryErrorFn
         * @desc Show success message
         */

        function addCategoryErrorFn(data, status, headers, config) {
            console.log('Error in adding');
            console.log(data);
            console.log(data.error);
        }

        /**
         * @name all
         * @desc get existing feeds
         * @param
         * @returns {Promise}
         * @memberOf pjfeedreader.feeds.services.Feeds
         */
        function all() {
            return $http.get('/feedreader/api/v1/categories/')
                .then(allCategorySuccessFn, allCategoryErrorFn);
        }
        /**
         * @name allCategorySuccessFn
         * @desc Show success message
         */

        function allCategorySuccessFn(data, status, headers, config) {
            console.log('categories.service');
            console.log(data);
            return data;
        }
	
        /**
         * @name allCategoryErrorFn
         * @desc Show success message
         */
        function allCategoryErrorFn(data, status, headers, config) {
            console.log('All Category error');
            console.log(data);
        }
    }
})();

