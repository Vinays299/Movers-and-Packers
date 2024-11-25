import { Injectable } from '@angular/core';
import { MoverEarning } from './mover/moverearning.model';

@Injectable({
  providedIn: 'root'
})
export class MoverEarningService {

  private earnings: MoverEarning[] = [];
  private nextId: number = 1;

  addEarning(earning: MoverEarning) {
    earning.id = this.nextId++;
    this.earnings.push(earning);
  }

  getEarnings(): MoverEarning[] {
    return this.earnings;
  }

  getTotalEarnings(): number {
    return this.earnings.reduce((total, earning) => total + earning.amount, 0);
  }
}  
