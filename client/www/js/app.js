// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
'use strict';
angular.module ('imageShare', [
    'ionic',
    'com.foccus.imageShare.controllers',
    'com.foccus.imageShare.services',
    'com.foccus.imageShare.directives'
])

    .run (function ($ionicPlatform) {
    $ionicPlatform.ready (function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar (true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault ();
        }
    });
})
    .config (function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state ('home', {
        url: "/home",
        controller: 'HomeCtrl',
        templateUrl: "views/home.html"
    })
        .state ('chat', {
        url: "/chat",
        controller: 'ChatCtrl',
        templateUrl: "views/chat.html"
    })

    ;
    $urlRouterProvider.otherwise('/home');
});