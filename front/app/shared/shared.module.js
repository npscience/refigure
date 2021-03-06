/**
 * @ngdoc object
 * @name refigureShared
 * @description
 *
 * Module with reusable directives and common services
 */
(function (angular) {
    'use strict';

    angular
        .module('refigureShared', [
            'ui.router',
            'ngMaterial',
            'refigure.collections',
            'refigure.blog'
        ]);

})(window.angular);
