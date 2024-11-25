import { Component } from '@angular/core';
import { Promotion } from '../promotion.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromotionService } from '../../promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'] 
})
export class PromotionsComponent {

  promotionForm: FormGroup;
  promotions: Promotion[] = [];
  editingPromotionId: number | null = null;

  constructor(private fb: FormBuilder, private promotionService: PromotionService) {
    this.promotionForm = this.fb.group({
      title: ['', Validators.required],
      discountPercentage: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['Active', Validators.required] 
    });

    this.loadPromotions();
  }

  loadPromotions() {
    this.promotions = this.promotionService.getPromotions();
  }

  onSubmit() {
    if (this.promotionForm.valid) {
      if (this.editingPromotionId !== null) {
        this.promotionService.updatePromotion(this.editingPromotionId, this.promotionForm.value);
        this.editingPromotionId = null; 
      } else {
        this.promotionService.addPromotion(this.promotionForm.value);
      }
      this.loadPromotions();
      this.promotionForm.reset(); 
      this.promotionForm.patchValue({ status: 'Active' }); 
    } else {
      console.log('Form is invalid');
    }
  }

  editPromotion(promotion: Promotion) {
    if (promotion.id !== undefined) { 
      this.editingPromotionId = promotion.id;
      this.promotionForm.patchValue(promotion);
    } else {
      console.error('Promotion ID is undefined'); 
    }
  }

  deletePromotion(id: number) {
    if (id !== undefined) {
      this.promotionService.deletePromotion(id);
      this.loadPromotions();
    } else {
      console.error('Promotion ID is undefined for deletion');
    }
  }
}
