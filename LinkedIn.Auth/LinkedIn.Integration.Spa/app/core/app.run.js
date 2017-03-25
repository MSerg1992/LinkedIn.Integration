(function () {
    App.run(function ($rootScope, $state, linkedInLoginService, localStorageService) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = typeof toState.data !== 'undefined' ? toState.data.requireLogin : false;

            if (requireLogin && !linkedInLoginService.isAuthorized()) {
                event.preventDefault();
                $state.go('welcome');
            }
        });

        $rootScope.$on('event:linkedIn-sign-out-success', function (event, logoutStatus) {
            if (logoutStatus === 'success') {
                $rootScope.currentUser = undefined;
                localStorageService.remove('userData');
                $state.go('welcome');
            }
        });

        $rootScope.$on('event:linkedIn-sign-in-success', function (event, userDetails) {
            localStorageService.set('userData', userDetails);
        });
    });
})();