import { JermywellsdotcomPage } from './app.po';

describe('jermywellsdotcom App', function() {
  let page: JermywellsdotcomPage;

  beforeEach(() => {
    page = new JermywellsdotcomPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jermywellsdotcom Works!');
  });
});
