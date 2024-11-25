import { Component } from '@angular/core';
import { BookingManagement } from '../booking-management.model';
import { PaymentManagement } from '../payment-management.model';
import { ReportingService } from '../../reporting.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent {

  bookings: BookingManagement[] = [];
  payments: PaymentManagement[] = [];
  totalRevenue: number = 0;

  constructor(private reportingService: ReportingService) {
    this.loadReports();
  }

  loadReports() {
    this.bookings = this.reportingService.getBookingReport();
    this.payments = this.reportingService.getPaymentReport();
    this.totalRevenue = this.reportingService.getTotalRevenue();
  }
}
