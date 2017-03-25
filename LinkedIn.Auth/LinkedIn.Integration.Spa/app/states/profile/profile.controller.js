App.controller('profileCtrl', ['localStorageService', ProfileController]);

function ProfileController(localStorageService) {
    var vm = this;

    vm.user = localStorageService.get('userData');;
}