import { TestBed } from '@angular/core/testing';

import { FilterHeaderService } from './filter-header.service';

describe('FilterHeaderService', () => {
  let service: FilterHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
