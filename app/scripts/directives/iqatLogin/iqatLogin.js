'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatLogin', function ($state, Authenticate, banner) {

    var uniqueId = 0;

    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'scripts/directives/iqatLogin/iqatLogin.html',
      scope: {
        labels: '='
      },
      link: function postLink(scope, element, attrs) {

        // Add unique ID for IDs of labels in case directive exists
        // multiple times on the page
        var labels = element.children('label');
        var inputs = element.children('input');
        labels.eq(0).attr('for', 'loginEmail'+uniqueId);
        inputs.eq(0).attr('id', 'loginEmail'+uniqueId);
        labels.eq(1).attr('for', 'loginPassword'+uniqueId);
        inputs.eq(1).attr('id', 'loginPassword'+uniqueId);
        uniqueId++;

        if(attrs.labels === undefined || attrs.labels === 'false'){
          labels.addClass('sr-only');
        }

        if(attrs.small !== undefined || attrs.small === 'true'){
          inputs.addClass('input-sm');
          element.children('button').addClass('btn-sm');
        }



        scope.inputs = {
          email: 'josh@joshkra.me',
          password: 'foopassword'
        };

        scope.login = function() {
          //submit login info
          scope.loginInProgress = true;
          Authenticate.login(scope.inputs.email, scope.inputs.password).then(function(user){
            // Login successful
            banner.success(user.name + ', you are now logged in!');
            scope.loginInProgress = false;
          }, function(error){
            // Login failed, display error
            scope.loginInProgress = false;
            scope.loginError = error;
          });


        };

      }
    };
  });
