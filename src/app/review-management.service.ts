import { Injectable } from '@angular/core';
import { ReviewManagement } from './mover/review-management.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewManagementService {

  private reviews: ReviewManagement[] = [];
  private nextId: number = 1;

  addReview(review: ReviewManagement) {
    review.id = this.nextId++;
    this.reviews.push(review);
  }

  getReviews(): ReviewManagement[] {
    return this.reviews;
  }

  deleteReview(id: number) {
    this.reviews = this.reviews.filter(review => review.id !== id);
  }
}
