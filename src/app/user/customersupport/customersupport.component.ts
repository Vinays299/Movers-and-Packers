import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerSupportService } from '../../customersupport.service';

@Component({
  selector: 'app-customersupport',
  templateUrl: './customersupport.component.html',
  styleUrls: ['./customersupport.component.css']
})
export class CustomersupportComponent {

  supportForm: FormGroup;

  constructor(private fb: FormBuilder, private customerSupportService: CustomerSupportService) {
    this.supportForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.supportForm.valid) {
      console.log('Support Request Submitted', this.supportForm.value);
      this.customerSupportService.submitSupportRequest(this.supportForm.value).subscribe(
        response => {
          console.log('Support request submitted successfully:', response);
        
        },
        error => {
          console.error('Error submitting support request:', error);
         
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
