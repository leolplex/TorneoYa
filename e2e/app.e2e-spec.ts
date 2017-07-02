import { TorneoYaAPPPage } from './app.po';

describe('torneo-ya-app App', () => {
  let page: TorneoYaAPPPage;

  beforeEach(() => {
    page = new TorneoYaAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
