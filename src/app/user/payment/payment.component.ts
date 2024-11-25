import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
 
  paymentForm: FormGroup;
  message: string | undefined;

  constructor(private fb: FormBuilder) {

    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$')]], // MM/YY format
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      cardholderName: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
    });
  }
  
  get f() {
    return this.paymentForm.controls;
  }

  processPayment() {
    if (this.paymentForm.valid) {
      // Handle payment processing logic here
      console.log(this.paymentForm.value);
      this.message = 'Payment processed successfully!'; // Or handle success/error messages accordingly
    } else {
      this.message = 'Please fix the errors in the form.';
    }
  }
}
