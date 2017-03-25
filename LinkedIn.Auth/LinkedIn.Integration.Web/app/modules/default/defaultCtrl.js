'use strict';
App.controller('DefaultCtrl', ['authService', DefaultCtrl]);

function DefaultCtrl(authService) {
    var vm = this;
    vm.message = 'Public landing page';

    console.log(authService.authentication);
}