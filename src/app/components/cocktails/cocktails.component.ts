import { Component, signal, computed } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details.component';
import { Cocktail } from 'app/partage/interfaces';
import { cocktails } from 'app/partage/interfaces/data';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailDetailsComponent],
  template: `
    <app-cocktails-list
      (selectCocktail)="selectCocktail($event)"
      [selectedCocktailName]="selectedCocktailName()"
      [cocktails]="cocktails()"
      class="w-50 card"
    />
    <app-cocktail-details class="w-50 card" />
  `,
  styles: `
    :host {
      display: flex;
      gap: 24px;
      padding: 24px;
    }
  `,
})
export class CocktailsComponent {
  cocktails = signal<Cocktail[]>(cocktails);
  selectedCocktail = signal(this.cocktails()[0]);
  selectedCocktailName = computed(() => this.selectedCocktail().name);

  selectCocktail(cocktailName: string) {
    const newCocktail = this.cocktails().find(
      ({ name }) => name === cocktailName
    );
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }
}
