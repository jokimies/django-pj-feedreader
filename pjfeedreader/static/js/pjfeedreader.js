(function () {

    'use strict';

    /**
     * @ngdoc overview
     * @name djsreaderApp
     * @description
     * # djsreaderApp
     *
     * Main module of the application.
     */
    angular
	.module('pjfeedreader', [
	    'pjfeedreader.routes',
	    'pjfeedreader.feeds',
	    'ngAnimate',
	    'ngCookies',
	    'ngResource',
	    'ngRoute',
	    'ngSanitize',
	    'ngTouch'
	]);

    angular
	.module('pjfeedreader.routes', ['ngRoute']);

    angular
	.module('pjfeedreader')
	.run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
    }
})();
