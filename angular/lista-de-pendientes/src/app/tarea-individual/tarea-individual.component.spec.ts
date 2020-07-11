import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaIndividualComponent } from './tarea-individual.component';

describe('TareaIndividualComponent', () => {
  let component: TareaIndividualComponent;
  let fixture: ComponentFixture<TareaIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
