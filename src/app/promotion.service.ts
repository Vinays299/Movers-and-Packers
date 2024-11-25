import { Injectable } from '@angular/core';
import { Promotion } from './admin/promotion.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private promotions: Promotion[] = [];
  private nextId: number = 1;

  addPromotion(promotion: Promotion) {
    promotion.id = this.nextId++;
    this.promotions.push(promotion);
  }

  getPromotions(): Promotion[] {
    return this.promotions;
  }

  deletePromotion(id: number) {
    this.promotions = this.promotions.filter(promotion => promotion.id !== id);
  }

  updatePromotion(id: number, updatedPromotion: Promotion) {
    const index = this.promotions.findIndex(promotion => promotion.id === id);
    if (index !== -1) {
      this.promotions[index] = { ...this.promotions[index], ...updatedPromotion };
    }
  }
}
