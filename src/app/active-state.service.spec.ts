import { TestBed, inject } from '@angular/core/testing';

import { ActiveStateService } from './active-state.service';

describe('ActiveStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveStateService]
    });
  });

  it('should be created', inject([ActiveStateService], (service: ActiveStateService) => {
    expect(service).toBeTruthy();
  }));
});
