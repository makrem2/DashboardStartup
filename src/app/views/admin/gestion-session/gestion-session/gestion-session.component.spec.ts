import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSessionComponent } from './gestion-session.component';

describe('GestionSessionComponent', () => {
  let component: GestionSessionComponent;
  let fixture: ComponentFixture<GestionSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
