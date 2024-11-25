import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverPanelComponent } from './mover-panel.component';

describe('MoverPanelComponent', () => {
  let component: MoverPanelComponent;
  let fixture: ComponentFixture<MoverPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoverPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
