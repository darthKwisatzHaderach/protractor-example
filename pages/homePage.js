var HomePage = function () {
	var catalogLink = element(by.css('[href*="catalog"]'));
	var faqLink = element(by.css('[href*="faq"]'));
	var contactsLink = element(by.css('[href*="contacts"]'));

	this.get = function () {
		console.log("Navigate to home page");
		browser.get('https://www.samsung-forward.ru/');
		return this;
	};

	this.clickOnCatalogLink = function () {
		console.log("Click on 'Catalog' link");
		catalogLink.click;
		return this;
	};

	this.clickOnFaqLink = function () {
		console.log("Click on 'FAQ' link");
		faqLink.click;
		return this;
	};
	this.clickOnContactsLink = function () {
		console.log("Click on 'Contacts' link");
		contactsLink.click;
		return this;
	};
};
module.exports = new HomePage();
