'use strict';

describe('DashboardCtrl', function() {
    var scope,
        $rootScope,
        $controller,
        controller;

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        scope = $rootScope.$new();

        controller = $controller('DashboardCtrl', {
            $scope: scope
        });
    }));

    it('should instantiate', function() {
        expect(controller).toBeDefined();
        expect(scope.message).toEqual('Hello World!');
    });
});
