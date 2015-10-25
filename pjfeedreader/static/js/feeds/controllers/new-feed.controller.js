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

	self.categories = []

	Categories.all().then(allCategorySuccessFn, allCategoryErrorFn)
	console.log('NFCtrl')
	console.log(self.categories)
        /**
         * @name allCategorySuccessFn
         * @desc Show success message
         */

	function allCategorySuccessFn(data, status, headers, config) {
	    
	    self.categories = data.data
	}
	
        /**
         * @name allCategoryErrorFn
         * @desc Show success message
         */

	function allCategoryErrorFn(data, status, headers, config) {
	    console.log('All Category error');
	}


	/**
	 * @name submit
	 * @desc Create a new Feed
	 * @memberOf pjfeedreader.feeds.controllers.NewFeedController
	 */
	function submit() {
	    console.log("Add submit pressed");
	    console.log(self.newFeed)
	    console.log(self.selectedCategory);
	    $rootScope.$broadcast('feed.added', {
		feed: self.newFeed,
		category: self.selectedCategory
	    });
	    $scope.closeThisDialog();
	}
    }
})();
	
