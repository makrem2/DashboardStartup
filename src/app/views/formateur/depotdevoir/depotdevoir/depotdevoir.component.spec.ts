import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotdevoirComponent } from './depotdevoir.component';

describe('DepotdevoirComponent', () => {
  let component: DepotdevoirComponent;
  let fixture: ComponentFixture<DepotdevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotdevoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotdevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
