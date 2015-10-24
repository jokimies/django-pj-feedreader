/**
 * NewFeedController
 * @namespace pjfeedreader.posts.controllers
 */
(function () {
    'use strict';

    angular
	.module('pjfeedreader.feeds.controllers')
	.controller('NewFeedController', [ '$rootScope', '$scope', 'Feeds',
					   NewFeedController]);
    
    /**
     * @namespace NewFeedController
     */

    function NewFeedController($rootScope, $scope, Feeds) {

	var self = this;

	self.submit = submit;

	/**
	 * @name submit
	 * @desc Create a new Feed
	 * @memberOf pjfeedreader.feeds.controllers.NewFeedController
	 */
	function submit() {
	    console.log("Add submit pressed");
	    $scope.closeThisDialog();
	}
    }
})();
	
