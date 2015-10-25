(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pjfeedreader.controller:CategoryCtrl
     * @description
     * # CategoryCtrl
     * Controller of the pjfeedreader
     */

    angular.module('pjfeedreader.feeds.controllers')
	.controller('CategoryCtrl', ['Categories', CategoryCtrl]);

    function CategoryCtrl(Categories) {

	var self = this

	self.categories = []

	Categories.all().then(allCategorySuccessFn, allCategoryErrorFn)

        /**
         * @name allCategorySuccessFn
         * @desc Show success message
         */

	function allCategorySuccessFn(data, status, headers, config) {
	    console.log(data);
	}
	
        /**
         * @name allCategoryErrorFn
         * @desc Show success message
         */

	function allCategoryErrorFn(data, status, headers, config) {
	    console.log('All Category error');
	}
    }
})();
