import { AppPage } from './app.po';

describe('yugioh-deck-browser App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Deck Browser');
  });
});
