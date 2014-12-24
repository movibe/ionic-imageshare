/**
 * Created by movibe on 24/12/14.
 */
'use strict';
angular.module ('com.foccus.imageShare.controllers',[])
    .controller ('HomeCtrl', [
    '$scope', 'USER', '$state',
    function ($scope, USER, $state) {
        $scope.user = {};
        $scope.next = function () {
            USER.name = $scope.user.name;
            $state.go('chat');
        }
    }
])
    .controller ('ChatCtrl', [
    '$scope',
    '$rootScope',
    function ($scope, $rootScope) {


    }
])