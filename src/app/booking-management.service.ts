import { Injectable } from '@angular/core';
import { BookingManagement } from './admin/booking-management.model';

@Injectable({
  providedIn: 'root'
})
export class BookingManagementService {

  private bookings: BookingManagement[] = [];
  private nextId: number = 1;

  addBooking(booking: BookingManagement) {
    booking.id = this.nextId++;
    this.bookings.push(booking);
  }

  getBookings(): BookingManagement[] {
    return this.bookings;
  }

  deleteBooking(id: number) {
    this.bookings = this.bookings.filter(booking => booking.id !== id);
  }

  updateBooking(id: number, updatedBooking: BookingManagement) {
    const index = this.bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
      this.bookings[index] = { ...this.bookings[index], ...updatedBooking };
    }
  }
}
