import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quoteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
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
    if (this.quoteForm.valid) {
      console.log('Quote Request Submitted', this.quoteForm.value);
      // Here, you would typically send the form data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
