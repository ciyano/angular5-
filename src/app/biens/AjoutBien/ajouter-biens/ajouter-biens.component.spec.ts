import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBiensComponent } from './ajouter-biens.component';

describe('AjouterBiensComponent', () => {
  let component: AjouterBiensComponent;
  let fixture: ComponentFixture<AjouterBiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
