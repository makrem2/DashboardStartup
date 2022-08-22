import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDevoirComponent } from './gestion-devoir.component';

describe('GestionDevoirComponent', () => {
  let component: GestionDevoirComponent;
  let fixture: ComponentFixture<GestionDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDevoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
