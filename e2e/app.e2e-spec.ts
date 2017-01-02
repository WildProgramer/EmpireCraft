import { EmpirecraftPage } from './app.po';

describe('empirecraft App', function() {
  let page: EmpirecraftPage;

  beforeEach(() => {
    page = new EmpirecraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
