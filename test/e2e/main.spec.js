describe('Angular Base Structure', function() {

    var expectElementToBePresent = function(cssSelector){
        expect(element(by.css(cssSelector)).isPresent()).toBe(true);
    };

    it('should open page and see global nav', function() {
        browser.get(browser.baseUrl);
    });

});