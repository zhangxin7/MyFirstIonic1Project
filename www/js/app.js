angular.module('app', ['ionic', 'app.controllers', 'app.services'])

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
      templateUrl: 'templates/index.html'
    })
    .state('demo.button', {
      url: '/button',
      templateUrl: 'templates/button.html'
    })
    .state('demo.list', {
      url: '/list',
      templateUrl: 'templates/list.html'
    })
    .state('demo.card', {
      url: '/card',
      templateUrl: 'templates/card.html'
    })
    .state('demo.form', {
      url: '/form',
      templateUrl: 'templates/form.html'
    })
    .state('demo.tab', {
      url: '/tab',
      templateUrl: 'templates/tab.html'
    })

    ;

  $urlRouterProvider.otherwise('/demo/index');
});
