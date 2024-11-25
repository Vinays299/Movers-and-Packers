import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoverEarningService } from '../../mover-earning.service';
import { MoverEarning } from '../moverearning.model';

@Component({
  selector: 'app-earning-tracking',
  templateUrl: './earning-tracking.component.html',
  styleUrl: './earning-tracking.component.css'
})
export class EarningTrackingComponent {

  earningForm: FormGroup;
  earnings: MoverEarning[] = [];
  totalEarnings: number = 0;

  constructor(private fb: FormBuilder, private earningService: MoverEarningService) {
    this.earningForm = this.fb.group({
      jobId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required]
    });

    this.loadEarnings();
  }

  loadEarnings() {
    this.earnings = this.earningService.getEarnings();
    this.totalEarnings = this.earningService.getTotalEarnings();
  }

  onSubmit() {
    if (this.earningForm.valid) {
      this.earningService.addEarning(this.earningForm.value);
      this.loadEarnings();
      this.earningForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
}
