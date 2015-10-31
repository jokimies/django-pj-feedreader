/**
 * IndexController
 * @namespace pjfeedreader.layout.controllers
 */

(function () {
    'use strict';

    angular
        .module('pjfeedreader.layout.controllers')
        .controller('IndexController', ['$scope', '$http', '$timeout', 'Feeds', 
                                        'Categories', IndexController]); 

    function IndexController($scope, $http, $timeout, Feeds, Categories) {

        var self = this;
        self.refreshInterval = 300;
        self.feeds = [];
        self.categories = [];
        self.slicedFeeds = [];

        self.fetchFeed = fetchFeed;

        /* Get all feeds from server */
        Feeds.all().then(allFeedSuccessFn, allFeedErrorFn);
        
        Categories.all().then(function(data) {
            self.categories = data.data;
        });

        /* Be aware of added feeds */
        $scope.$on('feed.added', function(event, feed) {
            addFeed(feed.feed);
        });

        function fetchFeed(feed) {
            feed.items = [];
            var url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.1&num=10&callback=JSON_CALLBACK&q=' + encodeURIComponent(feed.url);

            $http.jsonp(url).
                success(function(data, status, headers, config) {
                    feed.items=data.responseData.feed.entries;
                    feed.title=data.responseData.feed.title;
                }).
                error(function(data, status, headers, config) {
                    console.error('Error fetching feed:', data);
                });
            $timeout(function() { fetchFeed(feed); }, self.refreshInterval * 1000);
        }

        function addFeed(feed) {
            fetchFeed(feed);
            self.feeds.push(feed);
            self.slicedFeeds = sliceFeeds(self.feeds, 3);
        }

        function sliceFeeds(arr, size) {
            var slicedArr = [];
            for (var i=0; i<arr.length; i+=size) {
                slicedArr.push(arr.slice(i, i+size));
            }
            return slicedArr;
        }

        
        /**
         * @name addFeedSuccessFn
         * @desc Set feeds to retrieved data on succesfull retrieval
         */

        function allFeedSuccessFn(data, status, headers, config) {
            // Snackbar notification here ?
            var index;
            
            console.log('All feed Success');
            self.feeds = data.data;
            self.slicedFeeds = sliceFeeds(self.feeds, 3);
            console.log(self.slicedFeeds);

            for (index = 0; index < self.feeds.length; ++index) {
                fetchFeed(self.feeds[index]);
            }
        }

        /**
         * @name addFeedErrorFn
         * @desc Show error message, on getting all the feeds
         */

        function allFeedErrorFn(data, status, headers, config) {
            // Snackbar notification here ?
            self.feeds = data.data;
        }

        self.deleteFeed = function(feed) {
            self.feeds.splice(self.feeds.indexOf(feed), 1);
            self.slicedFeeds = sliceFeeds(self.feeds, 3);
            Feeds.remove(feed);
        };
    }
})();
    
