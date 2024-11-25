import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating-reviews',
  templateUrl: './rating-reviews.component.html',
  styleUrl: './rating-reviews.component.css'
})
export class RatingReviewsComponent {

  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      review: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log('Review Submitted', this.reviewForm.value);
      // Here, you would typically send the form data to a server
    } else {
      console.log('Form is invalid');
    }
  }

}
