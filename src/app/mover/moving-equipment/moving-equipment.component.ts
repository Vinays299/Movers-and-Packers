import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovingEquipmentService } from '../../moving-equipment.service';
import { MovingEquipment } from '../moving-equipment.model';

@Component({
  selector: 'app-moving-equipment',
  templateUrl: './moving-equipment.component.html',
  styleUrl: './moving-equipment.component.css'
})
export class MovingEquipmentComponent {

  equipmentForm: FormGroup;
  equipmentList: MovingEquipment[] = [];

  constructor(private fb: FormBuilder, private movingEquipmentService: MovingEquipmentService) {
    this.equipmentForm = this.fb.group({
      equipmentType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      rentalDate: ['', Validators.required],
      returnDate: [''] 
    });

    this.loadEquipment();
  }

  loadEquipment() {
    this.equipmentList = this.movingEquipmentService.getEquipmentList();
  }

  onSubmit() {
    if (this.equipmentForm.valid) {
      this.movingEquipmentService.addEquipment(this.equipmentForm.value);
      this.loadEquipment();
      this.equipmentForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
}
