// Ionic Starter App


// angular.module is a global place for creating, registering and retrieving Angular modules

// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)

// the 2nd parameter is an array of 'requires'

// 'starter.services' is found in services.js

// 'starter.controllers' is found in controllers.js

var starter = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

//.run(function($ionicPlatform, $rootScope, $ionicHistory) {
//  $rootScope.$on('stateChangeStart', function(event, toState, toParams, fromState, fromParams){
//    $ionicHistory.clearCache();
//  });

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard

      // for form inputs)

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

        cordova.plugins.Keyboard.disableScroll(false);


      }

      if (window.StatusBar) {

        // org.apache.cordova.statusbar required

        StatusBar.styleDefault();

      }

    });

  })


  .config(function($stateProvider, $urlRouterProvider) {


    // Ionic uses AngularUI Router which uses the concept of states

    // Learn more here: https://github.com/angular-ui/ui-router

    // Set up the various states which the app can be in.

    // Each state's controller can be found in controllers.js

    $stateProvider


      .state('login',{

        url:'/login',

        templateUrl:'templates/tab-login.html',

        controller:'LoginCtrl',

        params: { 'user' : {
            'id': '',
            'firstName' : '',
            'lastName' : '',
            'gender' : '',
            'email' : '',
            'phone' : '',
            'city' : '',
            'state' : '',
            'photo' : '',
            'pets':'',
            'aboutUser' : ''
        } }

      })


      // setup an abstract state for the tabs directive

      .state('tab', {

        url: '/tab',

        abstract: true,

        templateUrl: 'templates/tabs.html',

      })


      // Each tab has its own nav history stack:



      .state('dash', {

        url: '/dash',

        templateUrl: 'templates/tab-dash.html',

        controller: 'DashCtrl',

        params: { 'user' : {
                    'id': '',
                    'firstName' : '',
                    'lastName' : '',
                    'gender' : null,
                    'email' : '',
                    'phone' : '',
                    'city' : '',
                    'state' : '',
                    'photo' : '',
                    'pets':'',
                    'aboutUser' : ''
                } }

      })


//
//      .state('signup', {
//
//        url: '/signup',
//
//        templateUrl: 'templates/tab-signup.html',
//
//        controller: 'SignupCtrl'
//
//
//      })


//      .state('chats', {
//
//        url: '/chats',
//
//        templateUrl: 'templates/tab-chats.html',
//
//        controller: 'ChatsCtrl',
//
//      })

//      .state('chat-detail', {
//
//        url: '/chats/:name',
//
//        templateUrl: 'templates/chat-detail.html',
//
//        controller: 'ChatDetailCtrl',
//
//      })


      .state('account', {

        url: '/account',

        templateUrl: 'templates/tab-account.html',

        controller: 'AccountCtrl',

        params: { 'user' : {
                    'id': '',
                    'firstName' : '',
                    'lastName' : '',
                    'gender' : '',
                    'email' : '',
                    'phone' : '',
                    'city' : '',
                    'state' : '',
                    'photo' : '',
                    'pets':'',
                    'aboutUser' : ''
                } }

      })

      .state('search', {

        url: '/search',

        templateUrl: 'templates/tab-search.html',

        controller: 'SearchCtrl',

        params: {

          'city' : "",

          'state' : "",

          'userIdentity' : { 'Sitter' : false,  'Owner': false },

          'pet' : { 'Dogs' : false,  'Cats': false, 'Fish': false}

        }

      })

      .state('searchResult', {

        url: '/searchResult',

        templateUrl: 'templates/search-result.html',

        controller: 'SearchResultCtrl',

        params: {

          'city' : "",

          'state' : "",

          'userIdentity' : { 'Sitter':false,  'Owner':false },

          'pet' : { 'Dogs':false,  'Cats':false, 'Fish': false}

        }

      })


      .state('blog', {

        url: '/blog',

        templateUrl: 'templates/tab-blog.html',

        controller: 'BlogCtrl',

        params: {
          'uid': '',
          'purpose' : '',
          'pets' : '',
          'city' : '',
          'state' : '',
          'startDate' : '',
          'endDate' : '',
          'active' : '',
          'message' : ''

        }


      })

//      .state('gps', {
//
//        url: '/gps',
//
//        templateUrl: 'templates/blog-gps.html',
//
//        //   controller: 'gpsCtrl'
//
//      })

      .state('newPost', {

        url: '/newPost',

        templateUrl: 'templates/blog-newpost.html',

        controller: 'NewPostCtrl',

        params: {
          'uid': '',
          'purpose' : '',
          'pets' : '',
          'city' : '',
          'state' : '',
          'startDate' : '',
          'endDate' : '',
          'active' : '',
          'message' : ''

        }


      });


    // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('/login');


    }).run(function($ionicPlatform, $rootScope, $ionicHistory) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

        $ionicHistory.clearCache();
    });
});