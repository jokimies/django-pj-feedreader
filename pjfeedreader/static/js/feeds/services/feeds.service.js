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
            all: all,
            remove: remove
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

        function addFeedSuccessFn(data) {
            console.log('Adding feed succesfully');
        }

        /**
         * @name addCategoryErrorFn
         * @desc Show success message
         */

        function addFeedErrorFn(data) {
            console.log('Error in adding');
            console.log(data);
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
	/**
	 * @name remove
	 * @desc delete existing feed (called remove as delete is reserved)
	 * @param
	 * @returns {Promise}
	 * @memberOf pjfeedreader.feeds.services.Feeds
	 */

        function remove(feed) {
            return $http.delete('/feedreader/api/v1/feeds/' + feed.id + '/')
                .then(removeFeedSuccessFn, removeFeedErrorFn);
        }

        /**
         * @name removeFeedSuccessFn
         * @desc Show success message
         */

        function removeFeedSuccessFn(data) {
            /* console.log(data); */
            
        }

        /**
         * @name removeCategoryErrorFn
         * @desc Show success message
         */

        function removeFeedErrorFn(data) {
            /* console.log(data.status);
            console.log(data.statusText);
            console.log(data.config.url); */
        }

    }
})();

