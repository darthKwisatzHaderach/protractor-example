var HomePage = require('../pages/HomePage');

describe('homepage', function() {
	it('should have working catalog link',
		function () {
			HomePage
				.get()
				.clickOnCatalogLink();
		});
});