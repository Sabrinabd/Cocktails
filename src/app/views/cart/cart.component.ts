import { Component, computed, inject } from '@angular/core';
import { CartIngredientsListComponent } from './components/cart-ingredients-list.component';
import { CartService } from 'app/partage/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CartIngredientsListComponent],
  template: `
    <app-cart-ingredients-list class="card " [ingredients]="ingredients()" />
  `,
  styles: `
  :host { 
    flex: 1 1 auto;
    
    ;}
  
  `,
})
export class CartComponent {
  private cartService = inject(CartService);
  ingredients = computed(() => this.cartService.ingredients());
}
