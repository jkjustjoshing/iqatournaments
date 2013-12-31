'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatPattern', function (/*Restangular*/) {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        // elem.on('blur', function (evt) {
        //   scope.$apply(function () {
        //     var val = elem.val();
        //     var dbField = attrs.ngUnique;
        //     var ajaxConfiguration = { method: 'POST', url: 'backendServices/checkUsername.php', data: req };
        //     async(ajaxConfiguration)
        //       .success(function(data, status, headers, config) {
        //         ctrl.$setValidity('unique', data.status);
        //     });
        //   });
        // });

        elem.on('keyup blur', function (/*evt*/) {
          scope.$apply(function () {
            var val = elem.val();
            var pattern = attrs.iqatPattern;

            ctrl.$setValidity('pattern', val.match(scope[pattern]));

            // var req = { "username":val, "dbField":attrs.ngUnique }
            // var ajaxConfiguration = { method: 'POST', url: 'backendServices/checkUsername.php', data: req };
            // async(ajaxConfiguration)
            //   .success(function(data, status, headers, config) {
            //     ctrl.$setValidity('unique', data.status);
            // });
          });
        });



      }
    };
  });
