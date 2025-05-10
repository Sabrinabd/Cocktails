import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-cart-ingredients-list',
  imports: [],
  template: `
    <h2 class="mb-20">Liste des ingrédients</h2>
    <ul>
      <!-- @for()-->
    </ul>
  `,
  styles: `
  :host { display:block; padding: 24px; }
  `,
})
export class CartIngredientsListComponent {
  ingredients = input<string[]>();

  constructor() {
    effect(() => {
      console.log(this.ingredients());
    });
  }
}
