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

	Categories.all().then(function(data, status, headers, config) {
	    console.log(data)
	});

    }
})();
