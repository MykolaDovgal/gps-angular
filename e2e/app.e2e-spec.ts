import { GPSClientAngular2Page } from './app.po';

describe('gps-client-angular2 App', function() {
  let page: GPSClientAngular2Page;

  beforeEach(() => {
    page = new GPSClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
