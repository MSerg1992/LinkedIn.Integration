
App.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'linkedInProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, linkedInProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'app/states/welcome/welcome.html',
        });

    $stateProvider
        .state('app', {
            abstract: true,
            data: { requireLogin: true }
        })
        //.state('app.contacts', { url: '/contacts', templateUrl: 'app/states/contacts/contacts.html' })
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'app/states/contacts/contacts.html',
            data: { requireLogin: true }
        })
        .state('profile', {
            url: '/profile',
            controller: 'profileCtrl',
            controllerAs:'vm',
            templateUrl: 'app/states/profile/profile.html',
            data: { requireLogin: true }
        });
}]);
