(function () {
    'use strict';

    angular
	.module('pjfeedreader.routes')
	.config(config);

    config.$inject = ['$routeProvider'];
    /**
     * @name config
     * @desc Define valid application routes
     */
  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/templates/layout/main.html',
        controller: 'IndexController',
        controllerAs: 'ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
