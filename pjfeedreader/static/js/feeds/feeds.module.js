(function () {
    'use strict';

    angular
	.module('pjfeedreader.feeds', [
	    'pjfeedreader.feeds.services',
	    'pjfeedreader.feeds.controllers',
	    'ngDialog',
	]);

    angular
	.module('pjfeedreader.feeds.services', []);

    angular
	.module('pjfeedreader.feeds.controllers', []);
})();
