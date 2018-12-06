import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBiensMembresComponent } from './recherche-biens-membres.component';

describe('RechercheBiensMembresComponent', () => {
  let component: RechercheBiensMembresComponent;
  let fixture: ComponentFixture<RechercheBiensMembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBiensMembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBiensMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
