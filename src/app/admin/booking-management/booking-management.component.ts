import { Component } from '@angular/core';
import { BookingManagement } from '../booking-management.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingManagementService } from '../../booking-management.service';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrl: './booking-management.component.css'
})
export class BookingManagementComponent {

  bookingForm: FormGroup;
  bookings: BookingManagement[] = [];
  editingBookingId: number | null | undefined = null;

  constructor(private fb: FormBuilder, private bookingService: BookingManagementService) {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      movingDate: ['', Validators.required],
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      status: ['Confirmed', Validators.required] 
    });

    this.loadBookings();
  }

  loadBookings() {
    this.bookings = this.bookingService.getBookings();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      if (this.editingBookingId !== null && this.editingBookingId !== undefined) {
        this.bookingService.updateBooking(this.editingBookingId, this.bookingForm.value);
        this.editingBookingId = null; 
      } else {
        this.bookingService.addBooking(this.bookingForm.value);
      }
      this.loadBookings();
      this.bookingForm.reset(); 
      this.bookingForm.patchValue({ status: 'Confirmed' }); 
    } else {
      console.log('Form is invalid');
    }
  }

  editBooking(booking: BookingManagement) {
    if (booking.id !== undefined) {
      this.editingBookingId = booking.id; 
      this.bookingForm.patchValue(booking);
    } else {
      console.error('Booking ID is undefined');
    }
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id);
    this.loadBookings();
  }
}
