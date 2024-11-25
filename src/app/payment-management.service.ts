import { Injectable } from '@angular/core';
import { PaymentManagement } from './admin/payment-management.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentManagementService {

  private payments: PaymentManagement[] = [];
  private nextId: number = 1;

  addPayment(payment: PaymentManagement) {
    payment.id = this.nextId++;
    this.payments.push(payment);
  }

  getPayments(): PaymentManagement[] {
    return this.payments;
  }

  deletePayment(id: number) {
    this.payments = this.payments.filter(payment => payment.id !== id);
  }
}
