import { Component } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details.component';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailDetailsComponent],
  template: `
    <app-cocktails-list class="w-50 card" />
    <app-cocktail-details class="w-50 card" />
  `,
  styles: `
    :host {
      display: flex;
      gap: 24px;
      padding: 24px;
    }`,
})
export class CocktailsComponent {}
