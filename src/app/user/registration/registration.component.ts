import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent  {
 
  registrationForm: FormGroup;
  registrationSuccess = false;  

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {

    this.registrationForm = this.fb.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }
 
  onSubmit() {
    if (this.registrationForm.valid) {
      
      this.registrationSuccess = true;

      
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); 
    }
  }
}
