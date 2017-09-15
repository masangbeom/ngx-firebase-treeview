import { NgxFirebaseTreeviewPage } from './app.po';

describe('ngx-firebase-treeview App', () => {
  let page: NgxFirebaseTreeviewPage;

  beforeEach(() => {
    page = new NgxFirebaseTreeviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
