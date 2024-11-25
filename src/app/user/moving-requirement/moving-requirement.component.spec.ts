import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingRequirementComponent } from './moving-requirement.component';

describe('MovingRequirementComponent', () => {
  let component: MovingRequirementComponent;
  let fixture: ComponentFixture<MovingRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingRequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
