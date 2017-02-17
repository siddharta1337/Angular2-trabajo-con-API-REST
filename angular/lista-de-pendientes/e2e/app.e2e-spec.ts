import { ListaDePendientesPage } from './app.po';

describe('lista-de-pendientes App', function() {
  let page: ListaDePendientesPage;

  beforeEach(() => {
    page = new ListaDePendientesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
