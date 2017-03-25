"use strict";

App.controller('AngularAppCtrl', ['$scope', '$rootScope', 'authService', AngularAppCtrl]);

function AngularAppCtrl($scope, $rootScope, authService) {

    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
        //authService.
        console.log(userDetails);
    });

    $rootScope.$on('event:social-sign-out-success', function (event, logoutStatus) {
        console.log(logoutStatus);
    })
}