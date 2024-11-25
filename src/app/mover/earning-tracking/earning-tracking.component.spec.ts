import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningTrackingComponent } from './earning-tracking.component';

describe('EarningTrackingComponent', () => {
  let component: EarningTrackingComponent;
  let fixture: ComponentFixture<EarningTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarningTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
