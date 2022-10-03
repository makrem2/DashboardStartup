import { TestBed } from '@angular/core/testing';

import { FormateurguardsGuard } from './formateurguards.guard';

describe('FormateurguardsGuard', () => {
  let guard: FormateurguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormateurguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
