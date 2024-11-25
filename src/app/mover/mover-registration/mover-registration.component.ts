import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoverService } from '../../mover.service';

@Component({
  selector: 'app-mover-registration',
  templateUrl: './mover-registration.component.html',
  styleUrl: './mover-registration.component.css'
})
export class MoverRegistrationComponent {

  moverForm: FormGroup<any>;

  constructor(private fb: FormBuilder, private moverService: MoverService) {
    this.moverForm = this.fb.group({
      name: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      serviceAreas: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  get f() {
    return this.moverForm.controls;
  }

  onSubmit() {
    if (this.moverForm.valid) {
      this.moverService.addMover(this.moverForm.value);
      console.log('Mover Registered:', this.moverForm.value);
      this.moverForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
}
