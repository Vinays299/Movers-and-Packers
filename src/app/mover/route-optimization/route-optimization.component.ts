import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-route-optimization',
  templateUrl: './route-optimization.component.html',
  styleUrl: './route-optimization.component.css'
})
export class RouteOptimizationComponent {

  routeForm: FormGroup;
  optimizedRoute: string | null = null;

  constructor(private fb: FormBuilder) {
   
    this.routeForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      waypoints: [''], 
      preferences: [''] 
    });
  }

  onSubmit() {
    if (this.routeForm.valid) {
    
      this.routeForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
}
