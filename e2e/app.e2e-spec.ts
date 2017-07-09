import { SupportClientPage } from './app.po';

describe('support-client App', () => {
  let page: SupportClientPage;

  beforeEach(() => {
    page = new SupportClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
