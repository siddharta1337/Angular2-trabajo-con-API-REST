import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDePaginaComponent } from './pie-de-pagina.component';

describe('PieDePaginaComponent', () => {
  let component: PieDePaginaComponent;
  let fixture: ComponentFixture<PieDePaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieDePaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
