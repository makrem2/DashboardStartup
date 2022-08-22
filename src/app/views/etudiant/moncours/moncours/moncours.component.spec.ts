import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncoursComponent } from './moncours.component';

describe('MoncoursComponent', () => {
  let component: MoncoursComponent;
  let fixture: ComponentFixture<MoncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
