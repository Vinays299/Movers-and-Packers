import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverRegistrationComponent } from './mover-registration.component';

describe('MoverRegistrationComponent', () => {
  let component: MoverRegistrationComponent;
  let fixture: ComponentFixture<MoverRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoverRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoverRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
