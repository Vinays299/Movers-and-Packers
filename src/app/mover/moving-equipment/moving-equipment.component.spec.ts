import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingEquipmentComponent } from './moving-equipment.component';

describe('MovingEquipmentComponent', () => {
  let component: MovingEquipmentComponent;
  let fixture: ComponentFixture<MovingEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
