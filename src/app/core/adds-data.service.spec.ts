import { TestBed, inject } from '@angular/core/testing';

import { AddsDataService } from './adds-data.service';

describe('AddsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsDataService]
    });
  });

  it('should be created', inject([AddsDataService], (service: AddsDataService) => {
    expect(service).toBeTruthy();
  }));
});
