'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatAddList', function ($state, Authenticate, banner, Persons, Teams) {
    return {
      replace: true,
      restrict: 'A',
      require: '',
      scope: {
        models: '=iqatAddList',
        parent: '=parent',
        method: '=addMethod'
      },
      templateUrl: 'scripts/directives/iqatAddList/iqatAddList.html',
      link: function postLink(scope, element, attrs) {
        
        scope.placeholder = attrs.placeholder;
        scope.model = attrs.model;


        scope.addModel = function(){
          scope.method(scope.parent, scope.new).then(function(){
            scope.parent[scope.model].push(scope.new);
            scope.new = '';
          });
        }

      }
    };
  });
