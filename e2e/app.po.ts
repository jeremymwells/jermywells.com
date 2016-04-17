export class JermywellsdotcomPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jermywellsdotcom-app p')).getText();
  }
}
