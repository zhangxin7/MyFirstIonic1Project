// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText('').text('');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');  
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('demo', {
      url: '/demo',
      abstract: true,
      template: '<ion-nav-view></ion-nav-view>'
    })
    .state('demo.index', {
      url: '/index',
      templateUrl: '/templates/index.html'
    })
    .state('demo.button', {
      url: '/button',
      templateUrl: '/templates/button.html'
    })
    .state('demo.list', {
      url: '/list',
      templateUrl: '/templates/list.html'
    })
    .state('demo.card', {
      url: '/card',
      templateUrl: '/templates/card.html'
    })
    ;

  $urlRouterProvider.otherwise('/demo/index');
});
