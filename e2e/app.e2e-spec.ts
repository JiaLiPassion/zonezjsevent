import { ZoneeventPage } from './app.po';

describe('zoneevent App', () => {
  let page: ZoneeventPage;

  beforeEach(() => {
    page = new ZoneeventPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
