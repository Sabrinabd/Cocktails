import {
  Component,
  computed,
  effect,
  inject,
  Inject,
  signal,
} from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details.component';
import { Cocktail } from 'app/partage/interfaces';
import { cocktails } from 'app/partage/interfaces/data';
import { CocktailsService } from 'app/partage/services/cocktails.service';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailDetailsComponent],
  template: `
    <app-cocktails-list
      [(selectedCocktailId)]="selectedCocktailId"
      [selectedCocktailId]="selectedCocktailId()"
      [cocktails]="cocktails()"
      class="w-50 xs-w-100 card"
    />
    @let sc= selectedCocktail(); @if(sc) {
    <app-cocktail-details [cocktail]="sc" class="w-50 xs-w-100 card" />
    }
  `,

  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }
  `,
})
export class CocktailsComponent {
  cocktailsService = inject(CocktailsService);
  cocktails = computed(
    () => this.cocktailsService.cocktailsResource.value() || []
  );
  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(() =>
    this.cocktails().find(({ _id }) => _id === this.selectedCocktailId())
  );
}
