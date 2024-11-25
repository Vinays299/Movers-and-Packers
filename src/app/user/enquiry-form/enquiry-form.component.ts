import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-enquiry-form',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="enquiryForm">
      <label for="enquiry">Your Enquiry:</label>
      <input type="text" id="enquiry" formControlName="message" required>
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email" required>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" formControlName="phone" required>
      <label for="pickupLocation">Pickup Location:</label>
      <input type="text" id="pickupLocation" formControlName="pickupLocation" required>
      <label for="dropoffLocation">Dropoff Location:</label>
      <input type="text" id="dropoffLocation" formControlName="dropoffLocation" required>
      <label for="movingDate">Moving Date:</label>
      <input type="date" id="movingDate" formControlName="movingDate" required>
      <button type="submit">Next</button>
    </form>
  `,
})
export class EnquiryFormComponent {
  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder, private userDataService: UserdataService) {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      movingDate: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      console.log('Enquiry Submitted', this.enquiryForm.value);
      this.userDataService.setUserData(this.enquiryForm.value); // Store form data
    } else {
      console.log('Form is invalid');
    }
  }
}
