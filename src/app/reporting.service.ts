import { Injectable } from '@angular/core';
import { BookingManagementService } from './booking-management.service';
import { PaymentManagementService } from './payment-management.service';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  constructor(private bookingService: BookingManagementService, private paymentService: PaymentManagementService) {}

  getBookingReport() {
    return this.bookingService.getBookings();
  }

  getPaymentReport() {
    return this.paymentService.getPayments();
  }

  getTotalRevenue() {
    const payments = this.paymentService.getPayments();
    return payments.reduce((total, payment) => total + payment.amount, 0);
  }
}
