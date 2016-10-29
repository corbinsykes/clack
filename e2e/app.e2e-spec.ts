import { ClackPage } from './app.po';

describe('clack App', function() {
  let page: ClackPage;

  beforeEach(() => {
    page = new ClackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
