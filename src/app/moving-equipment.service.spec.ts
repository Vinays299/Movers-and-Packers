import { TestBed } from '@angular/core/testing';

import { MovingEquipmentService } from './moving-equipment.service';

describe('MovingEquipmentService', () => {
  let service: MovingEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovingEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
