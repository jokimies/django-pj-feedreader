'use strict';

/**
 * @ngdoc function
 * @name djsreaderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the djsreaderApp
 */
angular.module('pj-reader')  
    .controller('MainCtrl', ['$http', '$timeout', 'Feeds',  MainCtrl]);

function MainCtrl($http, $timeout, Feeds) {

    var self = this
    self.refreshInterval = 60;
    self.feeds = [{
	url: 'http://dailyjs.com/rss'
    }];

    self.fetchFeed = function(feed) {
	feed.items = [];

	var url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(feed.url);

	$http.jsonp(url).
	    success(function(data, status, headers, config) {
		console.log(data)
		feed.items=data.responseData.feed.entries
	    }).
	    error(function(data, status, headers, config) {
		console.error('Error fetching feed:', data);
	    });
	$timeout(function() { self.fetchFeed(feed); }, self.refreshInterval * 1000);
    };

    self.addFeed = function(feed) {
	console.log(feed)
	self.feeds.push(feed);
	Feeds.add({ 'feed_url': feed.url })
	    .then(addFeedSuccessFn, 
		  addFeedErrorFn);
	self.fetchFeed(feed);
	self.newFeed = {};
    };

    /**
     * @name addFeedSuccessFn
     * @desc Show success message
     */

    function addFeedSuccessFn(data, status, headers, config) {
	console.log('Adding feed succesfully');
    }

    /**
     * @name addFeedErrorFn
     * @desc Show success message
     */

    function addFeedErrorFn(data, status, headers, config) {
	console.log(data.error);
    }
    
    self.deleteFeed = function(feed) {
	self.feeds.splice(self.feeds.indexOf(feed), 1);
    };

    self.fetchFeed(self.feeds[0]);
};
