import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {

  currentStep: number = 0;
  steps: string[] = ['Enquiry', 'Registration', 'Login', 'Moving-Requirement', 'Quote', 'Payment', 'Live-Tracking', 'Rating-Reviews', 'Customer-Support'];

  constructor(private userDataService: UserdataService) {}

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
