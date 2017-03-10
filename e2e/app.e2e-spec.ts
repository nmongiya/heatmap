import { GkcHeatmapPage } from './app.po';

describe('gkc-heatmap App', () => {
  let page: GkcHeatmapPage;

  beforeEach(() => {
    page = new GkcHeatmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
