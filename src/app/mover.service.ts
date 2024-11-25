import { Injectable } from '@angular/core';
import { Mover } from './mover/mover.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoverService {
  private apiUrl = 'your-api-url/movers'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getTotalMovers(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }
  private movers: Mover[] = [
    {
      id: 1, name: 'Mover One', email: 'mover1@example.com', vehicleType: 'Truck', status: 'Active',
      contactNumber: '123-456-7890',
      serviceAreas: 'City A, City B',
      experience: 5
    },
    {
      id: 2, name: 'Mover Two', email: 'mover2@example.com', vehicleType: 'Van', status: 'Inactive',
      contactNumber: '987-654-3210',
      serviceAreas: 'City C, City D',
      experience: 3
    },
  ];

  getMovers(): Mover[] {
    return this.movers;
  }

  addMover(mover: Omit<Mover, 'id'>) { 
    const newId = this.movers.length ? Math.max(...this.movers.map(m => m.id)) + 1 : 1;
    this.movers.push({ id: newId, ...mover });
}


  updateMover(id: number, updatedMover: Mover) {
    const index = this.movers.findIndex(mover => mover.id === id);
    if (index !== -1) {
      this.movers[index] = { ...this.movers[index], ...updatedMover };
    }
  }

  deleteMover(id: number) {
    this.movers = this.movers.filter(mover => mover.id !== id);
  }
}
