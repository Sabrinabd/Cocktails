import {
  Component,
  computed,
  input,
  output,
  signal,
  viewChild,
  ElementRef,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cocktail } from 'app/partage/interfaces';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  template: `
    <h2 class="mb-20">Liste des cocktails</h2>
    <input
      [(ngModel)]="filter"
      type="text"
      #search
      class="mb-20 w-100"
      placeholder="Chercher un cocktail"
    />
    <ul class="mb-20">
      @for (cocktail of filteredCocktails(); track cocktail.name) { @let active
      = cocktail._id === selectedCocktailId();
      <li
        [class.active-item]="active"
        [class.text-primary]="active"
        (click)="selectedCocktailId.set(cocktail._id)"
        class="px-12 py-6 my-2 radius"
      >
        <h3>{{ cocktail.name }}</h3>
      </li>
      }
    </ul>
    <button class="btn btn-primary">Ajouter un cocktail</button>
  `,
  styles: `
    li:hover {
      cursor: pointer;
      background-color: var(--light);
      transition: all 0.4s;
    }
    host: {
      (window:keydown): 'keyboardInteraction($event)',
    }
  `,
})
export class CocktailsListComponent {
  search = viewChild<ElementRef<HTMLInputElement>>('search');
  filter = signal('');
  cocktails = input<Cocktail[]>();
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({ name }) =>
      name.toLowerCase().includes(this.filter().toLowerCase())
    )
  );
  selectedCocktailId = model<string | null>();

  likedCocktailIds = input.required<string[]>();
  likecocktail = output<string>();
  unlikecocktail = output<string>();

  keyboardInteraction({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape': {
        this.selectedCocktailId.set(null);
        break;
      }
      case 'Enter': {
        const selectedCocktailId = this.selectedCocktailId();
        if (selectedCocktailId) {
          if (this.likedCocktailIds().includes(selectedCocktailId)) {
            this.unlikecocktail.emit(selectedCocktailId);
          } else {
            this.likecocktail.emit(selectedCocktailId);
          }
        }
        break;
      }
      default: {
        this.search()?.nativeElement.focus();
      }
    }
  }
}
