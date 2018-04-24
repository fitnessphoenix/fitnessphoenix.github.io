'use strict';

/**
 * @ngdoc overview
 * @name joeyhedgesfitAppApp
 * @description
 * # joeyhedgesfitAppApp
 *
 * Main module of the application.
 */
 
 var joeyhedgesfitAppApp = angular.module('joeyhedgesfitAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
 joeyhedgesfitAppApp.config(function ($routeProvider) {
	 	        // use the HTML5 History API

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
	  .when('/services.html', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
	  .when('/testimonials.html', {
        templateUrl: 'views/testimonials.html',
        controller: 'TestimonialsCtrl',
        controllerAs: 'testimonials'
      })
	  .when('/videos.html', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        controllerAs: 'videos'
      })	 
      .when('/about.html', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/contact.html', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })	
	  .when('/paddle.html', {
        templateUrl: 'views/paddle.html',
        controller: 'PaddleCtrl',
        controllerAs: 'paddle'
      })	  
      .otherwise({
        redirectTo: '/'
      });
	  

  });
  
  
 
   
