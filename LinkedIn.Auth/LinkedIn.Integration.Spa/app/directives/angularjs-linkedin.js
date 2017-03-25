//Based on: https://github.com/heresy/angularjs-social-login

"use strict";

var linkedInLogin = angular.module('linkedInLogin', []);

linkedInLogin.provider("linkedIn", function () {
    var linkedInKey;
    return {
        setLinkedInKey: function (value) {
            linkedInKey = value;
            //var lIN, d = document, ref = d.getElementsByTagName('script')[0];
            //lIN = d.createElement('script');
            //lIN.async = false;
            //lIN.src = "//platform.linkedin.com/in.js";
            //lIN.text = ("api_key: " + linkedInKey).replace("\"", "");
            //ref.parentNode.insertBefore(lIN, ref);
        },
        $get: function () {
            return {
                linkedInKey: linkedInKey
            }
        }
    }
});

linkedInLogin.factory("linkedInLoginService", function ($window, $rootScope) {

    var service = {};

    var _loginCallback = function () {
        IN.API.Raw("/people/~:(id,first-name,last-name,email-address,picture-url)").result(function (res) {
            var userDetails = { name: res.firstName + " " + res.lastName, email: res.emailAddress, uid: res.id, imageUrl: res.pictureUrl };
            $rootScope.$broadcast('event:linkedIn-sign-in-success', userDetails);
        });
    };
    var _logoutCallback = function (p1, p2) {
        $rootScope.$broadcast('event:linkedIn-sign-out-success', "success");
    };

    return {
        login: function () { IN.User.authorize(_loginCallback); },
        logout: function () { IN.User.logout(_logoutCallback, {}); },
        isAuthorized: function () {
            return typeof IN.User !== 'undefined' ? IN.User.isAuthorized() : false;
        }
    };
});

linkedInLogin.directive("linkedInLogIn", function ($rootScope, linkedIn, linkedInLoginService, $window) {
    return {
        restrict: 'EA',
        scope: {},
        link: function (scope, ele, attr) {
            ele.on("click", function () {
                linkedInLoginService.login();
            });
        }
    }
});

linkedInLogin.directive("linkedInLogOut", function ($rootScope, linkedIn, linkedInLoginService, $window) {
    return {
        restrict: 'EA',
        scope: {},
        link: function (scope, ele, attr) {
            ele.on("click", function () {
                linkedInLoginService.logout();
            })
        }
    }
});
