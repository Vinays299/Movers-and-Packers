import { TestBed } from '@angular/core/testing';

import { MovingRequirementService } from './moving-requirement.service';

describe('MovingRequirementService', () => {
  let service: MovingRequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovingRequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
