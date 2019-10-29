// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class HomePage extends BasePage {
	constructor() {
		super();
		this.siteTitle = $$('title');
		this.homeLink = $$('#home');
		this.tabsLink = $$('#tabs');
		this.newVideosLink = $$('#new');

		this.url = 'http://simple-fingerstyle.com/';
		this.pageLoaded = this.inDom(this.siteTitle);
	}

	clickOnTabsLink() {
		console.log("Click on Tabs link");
		return this.tabsLink.click();
	}
}
export default new HomePage();
