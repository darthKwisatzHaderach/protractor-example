import homePage from '../pages/homePage';
import tabsPage from '../pages/tabsPage';

describe('simple-fingerstyle.com home page', function() {
	it('should have working tabs link',
		function () {
			homePage.goto();
			homePage.clickOnTabsLink();

			expect(tabsPage.table.isVisible);
		});
});