import { Injectable } from '@angular/core';
import { MovingEquipment } from './mover/moving-equipment.model';

@Injectable({
  providedIn: 'root'
})
export class MovingEquipmentService {

  private equipmentList: MovingEquipment[] = [];
  private nextId: number = 1;

  addEquipment(equipment: MovingEquipment) {
    equipment.id = this.nextId++;
    this.equipmentList.push(equipment);
  }

  getEquipmentList(): MovingEquipment[] {
    return this.equipmentList;
  }
}
