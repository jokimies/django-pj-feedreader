/**
 * Feeds
 * @namespace pj-feed.feeds.services
 */

(function () {
    'use strict';

    angular
        .module('pjfeedreader.feeds.services')
        .factory('Feeds', ['$http', Feeds]);

    /**
     * @namespace Feeds
     * @returns {Factory}
     */

    function Feeds($http) {
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

        function add(url, title, category) {
            return $http.post('/feedreader/api/v1/feeds/', {
                'url': url,
                'title': title,
                'category': category
            }).then(addFeedSuccessFn, addFeedErrorFn);
        }

        /**
         * @name addFeedSuccessFn
         * @desc Show success message
         */

        function addFeedSuccessFn(data, status, headers, config) {
            console.log('Adding feed succesfully');
        }

        /**
         * @name addCategoryErrorFn
         * @desc Show success message
         */

        function addFeedErrorFn(data, status, headers, config) {
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
            return $http.get('/feedreader/api/v1/feeds/');
        }
    }
})();

