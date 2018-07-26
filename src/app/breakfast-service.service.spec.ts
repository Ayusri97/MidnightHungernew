import { TestBed, inject } from '@angular/core/testing';

import { BreakfastServiceService } from './breakfast-service.service';

describe('BreakfastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakfastServiceService]
    });
  });

  it('should be created', inject([BreakfastServiceService], (service: BreakfastServiceService) => {
    expect(service).toBeTruthy();
  }));
});
