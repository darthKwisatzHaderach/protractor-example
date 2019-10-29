// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class TabsPage extends BasePage {
	constructor() {
		super();
		this.table = $$('#tabs');

		this.url = 'http://simple-fingerstyle.com/';
		this.pageLoaded = this.inDom(this.table);
	}
}
export default new TabsPage();
