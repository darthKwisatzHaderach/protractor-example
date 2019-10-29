// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class HomePage extends BasePage {
	constructor() {
		super();
		this.homeLink = $$('#home');
		this.tabsLink = $$('#tabs');
		this.newVideosLink = $$('#new');
		this.url = 'http://simple-fingerstyle.com/';

		// pageLoaded is used by `.loaded()` to test that we're on a page
		this.pageLoaded = this.and(
			this.hasText(this.siteTitle, 'SimpleFingerstyle'),
			this.isClickable(this.homeLink)
		);
	}
}
export default new HomePage();
