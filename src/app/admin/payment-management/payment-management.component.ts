import { Component } from '@angular/core';
import { PaymentManagement } from '../payment-management.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentManagementService } from '../../payment-management.service';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrl: './payment-management.component.css'
})
export class PaymentManagementComponent {

  paymentForm: FormGroup;
  payments: PaymentManagement[] = [];

  constructor(private fb: FormBuilder, private paymentService: PaymentManagementService) {
    this.paymentForm = this.fb.group({
      customerName: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0)]],
      date: [new Date(), Validators.required], 
      status: ['Completed', Validators.required] 
    });

    this.loadPayments();
  }

  loadPayments() {
    this.payments = this.paymentService.getPayments();
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.paymentService.addPayment(this.paymentForm.value);
      this.loadPayments();
      this.paymentForm.reset(); 
      this.paymentForm.patchValue({ status: 'Completed', date: new Date() }); 
    } else {
      console.log('Form is invalid');
    }
  }

  deletePayment(id: number) {
    this.paymentService.deletePayment(id);
    this.loadPayments();
  }
}
