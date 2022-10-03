import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionforumComponent } from './gestionforum.component';

describe('GestionforumComponent', () => {
  let component: GestionforumComponent;
  let fixture: ComponentFixture<GestionforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
