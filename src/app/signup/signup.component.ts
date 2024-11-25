import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signUpForm.valid) {
      const { role } = this.signUpForm.value;

    
      switch (role) {
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        case 'mover':
          this.router.navigate(['/movers']);
          break;
        case 'user':
          this.router.navigate(['/users']);
          break;
        default:
          break;
      }
    }
  }
}
