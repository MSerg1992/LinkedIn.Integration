App.controller('RootCtrl', ['$rootScope', RootController]);

function RootController($rootScope) {
    var vm = this;

    vm.isAuthenticated = true;
    vm.userName = '';

    $rootScope.$on('event:linkedIn-sign-out-success', function (event, logoutStatus) {
        if (logoutStatus === 'success') {
            vm.isAuthenticated = false;
        }
    });

    $rootScope.$on('event:linkedIn-sign-in-success', function (event, userDetails) {
        vm.isAuthenticated = true;
        vm.userName = userDetails.name;
    });
}