/**
 * NewFeedController
 * @namespace pjfeedreader.posts.controllers
 */
(function () {
    'use strict';

    angular
        .module('pjfeedreader.feeds.controllers')
        .controller('NewFeedController', [ '$rootScope', '$scope', 'Feeds',
                                           'Categories',NewFeedController]);
    
    /**
     * @namespace NewFeedController
     */

    function NewFeedController($rootScope, $scope, Feeds, Categories) {

        var self = this;

        self.submit = submit;
        self.newFeed = {} ;

        self.categories = [];

        Categories.all().then(function(data) {
            self.categories = data.data;
        });

        /**
         * @name allCategorySuccessFn
         * @desc Show success message
         */


        /**
         * @name submit
         * @desc Create a new Feed
         * @memberOf pjfeedreader.feeds.controllers.NewFeedController
         */
        function submit() {

            /* Tell listeners (e.g. IndexController) that a new feed was
            added */
            $rootScope.$broadcast('feed.added', {
                feed: self.newFeed,
                category: self.selectedCategory
            });
            $scope.closeThisDialog();
            Feeds.add(self.newFeed.url, 'Default title', 
                      self.selectedCategory);

        }
    }
})();
	
