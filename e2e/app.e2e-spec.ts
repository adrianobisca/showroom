import { AbeuniProjectPage } from './app.po';

describe('abeuni-project App', () => {
  let page: AbeuniProjectPage;

  beforeEach(() => {
    page = new AbeuniProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
