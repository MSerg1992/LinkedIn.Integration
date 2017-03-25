App.config(AppConfig);

function AppConfig($routeProvider, $locationProvider, socialProvider) {
    $routeProvider.when('/', {
        controller: 'DefaultCtrl',
        templateUrl: 'app/modules/default/default.html',
        controllerAs: 'vm'
    });

    $routeProvider.when('/contacts', {
        controller: 'ContactsCtrl',
        templateUrl: 'app/modules/contacts/contacts.html',
        controllerAs: 'vm'
    });
    
    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

    socialProvider.setLinkedInKey("7754pb1h7xkfe6");
}