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
        self.refreshInterval = 600;
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

            var format = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
            var query = "select * from xml where url = '" + feed.url + "'"
            var url = 'http://query.yahooapis.com/v1/public/yql?q=' + 
                fixedEncodeURIComponent(query) + format;
            var feedItem
            var what = Object.prototype.toString

            $http.jsonp(url).
                success(function(data, status, headers, config) {
                    /* Yahoo API returns an array in channel.item, if
                       there's more than one item in the feed, otherwise it
                       return an object
                    */
                    feedItem = data.query.results.rss.channel.item

                    /* feed.items is supposed to be an array. If array is
                       returned use it as such, if not push the single item
                       to feed.items -array 
                    */
                    if ( what.call(feedItem) === '[object Array]') {
                        feed.items=data.query.results.rss.channel.item;
                    } else {
                        feed.items.push(data.query.results.rss.channel.item)
                    }
                    feed.title=data.query.results.rss.channel.title;
                }).
                error(function(data, status, headers, config) {
                    console.error('Error fetching feed:', data);
                });
            $timeout(function() { fetchFeed(feed); }, self.refreshInterval * 1000);
        }

        function fixedEncodeURIComponent(url) {
            return encodeURIComponent(url).
                replace(/[!'()]/g, escape). //'
                replace(/\*/g, '%2A').
                replace(/\"/g, '%22').
                replace(/:/g, '%3A').
                replace(/\//g, '%2F');

        };

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
    
