import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovingRequirementService } from '../../moving-requirement.service'; 

@Component({
  selector: 'app-moving-requirement',
  templateUrl: './moving-requirement.component.html',
  styleUrls: ['./moving-requirement.component.css'] 
})
export class MovingRequirementComponent {

  movingForm: FormGroup;

  constructor(private fb: FormBuilder, private movingRequirementService: MovingRequirementService) {
    this.movingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      movingDate: ['', Validators.required],
      items: ['', Validators.required],
      specialInstructions: ['']
    });
  }

  onSubmit() {
    if (this.movingForm.valid) {
        console.log('Moving Requirements Submitted', this.movingForm.value);
        this.movingRequirementService.submitMovingRequirements(this.movingForm.value).subscribe(
            response => {
                console.log('Submission successful', response);
               
            },
            error => {
                console.error('Submission failed', error);
                
            }
        );
    } else {
        console.log('Form is invalid', this.movingForm.errors);
    }
}

}
