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

	function add(url, title) {
	    return $http.post('/feedreader/api/v1/feeds/', {
		'feed_url': url,
		'title': title
	    });
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

