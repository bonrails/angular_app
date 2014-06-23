'use strict';

/* Controllers */

 angular.module('StudentApp.controllers', []).
                                    controller('studentsController', function($scope) {
                                               $scope.nameFilter = null;
                                     $scope.studentsList = [ {  Student: {first_name: "jags",last_name: "ch"},college: "jntu",rank: '121' },
                                       {Student: {first_name: "sunny",last_name: "g"},college:"ou",rank:'200'},
                                       {Student: {first_name: "jhon",last_name: "s"},college:"ou",rank:'150'}
                                        ];



     });



