import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewManagement } from '../review-management.model';
import { ReviewManagementService } from '../../review-management.service';


@Component({
  selector: 'app-review-management',
  templateUrl: './review-management.component.html',
  styleUrl: './review-management.component.css'
})
export class ReviewManagementComponent {

  reviewForm: FormGroup;
  reviews: ReviewManagement[] = [];

  constructor(private fb: FormBuilder, private reviewService: ReviewManagementService) {
    this.reviewForm = this.fb.group({
      moverName: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required],
      date: [new Date(), Validators.required] 
    });

    this.loadReviews();
  }

  loadReviews() {
    this.reviews = this.reviewService.getReviews();
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      this.reviewService.addReview(this.reviewForm.value);
      this.loadReviews();
      this.reviewForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }

  deleteReview(id: number) {
    this.reviewService.deleteReview(id);
    this.loadReviews();
  }
}
