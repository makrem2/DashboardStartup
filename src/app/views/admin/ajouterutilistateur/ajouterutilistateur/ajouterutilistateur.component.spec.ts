import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterutilistateurComponent } from './ajouterutilistateur.component';

describe('AjouterutilistateurComponent', () => {
  let component: AjouterutilistateurComponent;
  let fixture: ComponentFixture<AjouterutilistateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterutilistateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterutilistateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
