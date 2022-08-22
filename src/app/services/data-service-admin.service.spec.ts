import { TestBed } from '@angular/core/testing';

import { DataServiceAdminService } from './data-service-admin.service';

describe('DataServiceAdminService', () => {
  let service: DataServiceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
