/**
 * IndexController
 * @namespace pjfeedreader.layout.controllers
 */

(function () {
    'use strict';

    angular
	.module('pjfeedreader.layout.controllers')
	.controller('IndexController', ['$scope', '$http', '$timeout', 'Feeds', 
					IndexController]); 

    function IndexController($scope, $http, $timeout, Feeds) {

	var self = this
	self.refreshInterval = 60;
	self.feeds = [];
	console.log('JOOOOOO');
	Feeds.all().then(allFeedSuccessFn, allFeedErrorFn)

	/* Be aware of added feeds */
	$scope.$on('feed.added', function(event, feed) {
	    console.log('Feed created')
	    console.log(feed)
	    console.log(event)
	    self.addFeed(feed.feed);
	});

	self.fetchFeed = function(feed) {
	    feed.items = [];

	    console.log('Feeds:')
	    console.log(feed)
	    var url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.1&num=10&callback=JSON_CALLBACK&q=' + encodeURIComponent(feed.url);

	    $http.jsonp(url).
		success(function(data, status, headers, config) {
		    console.log(data)
		    feed.items=data.responseData.feed.entries
		    feed.title=data.responseData.feed.title
		    console.log(feed.title)
		}).
		error(function(data, status, headers, config) {
		    console.error('Error fetching feed:', data);
		});
	    $timeout(function() { self.fetchFeed(feed); }, self.refreshInterval * 1000);
	};

	self.addFeed = function(feed) {
	    self.fetchFeed(feed);
	    console.log(feed)
	    console.log('Jepjeep')
	    self.feeds.push(feed);
	    /* Feeds.add(feed.url, feed.title)
		.then(addFeedSuccessFn, 
		      addFeedErrorFn); */
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
	    console.log('Error in adding')
	    console.log(data)
	    console.log(data.error);
	}
	
	/**
	 * @name addFeedSuccessFn
	 * @desc Set feeds to retrieved data on succesfull retrieval
	 */

	function allFeedSuccessFn(data, status, headers, config) {
	    // Snackbar notification here ?
	    var index
	    
	    console.log('All feed Success')
	    self.feeds = data.data
	    for (index = 0; index < self.feeds.length; ++index) {
		self.fetchFeed(self.feeds[index])
	    }
	}

	/**
	 * @name addFeedErrorFn
	 * @desc Show error message, on getting all the feeds
	 */

	function allFeedErrorFn(data, status, headers, config) {
	    // Snackbar notification here ?
	    self.feeds = data.data
	}

	self.deleteFeed = function(feed) {
	    self.feeds.splice(self.feeds.indexOf(feed), 1);
	};
    }
})();
    
