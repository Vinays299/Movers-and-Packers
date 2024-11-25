import { TestBed } from '@angular/core/testing';

import { MoverEarningService } from './mover-earning.service';

describe('MoverEarningService', () => {
  let service: MoverEarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoverEarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
