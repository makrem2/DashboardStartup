import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosformationComponent } from './nosformation.component';

describe('NosformationComponent', () => {
  let component: NosformationComponent;
  let fixture: ComponentFixture<NosformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
