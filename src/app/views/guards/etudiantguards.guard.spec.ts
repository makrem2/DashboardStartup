import { TestBed } from '@angular/core/testing';

import { EtudiantguardsGuard } from './etudiantguards.guard';

describe('EtudiantguardsGuard', () => {
  let guard: EtudiantguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EtudiantguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
