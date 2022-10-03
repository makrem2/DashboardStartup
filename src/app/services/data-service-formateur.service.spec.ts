import { TestBed } from '@angular/core/testing';

import { DataServiceFormateurService } from './data-service-formateur.service';

describe('DataServiceFormateurService', () => {
  let service: DataServiceFormateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceFormateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
