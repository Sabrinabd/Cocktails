import { Component } from '@angular/core';
import { Cocktail } from 'app/partage/interfaces';

@Component({
  selector: 'app-cocktail-details',

  imports: [],
  template: `
    <img class="mb-20" [src]="cocktail.imageUrl" />
    <h3 class="mb-20">{{ cocktail.name }}</h3>
    <p class="mb-20">{{ cocktail.description }}</p>
    <div>
      <button class="btn btn-primary">Ajouter cocktail</button>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }`,
})
export class CocktailDetailsComponent {
  cocktail = {
    imageUrl:
      'https://www.cocktail.fr/wp-content/uploads/2017/05/cocktail.fr-44155-1-1013x675.jpg.webp',
    name: 'Mojito',
    description:
      'Le Mojito est un cocktail emblématique originaire de Cuba, alliant la fraîcheur de la menthe, l’acidité du citron vert, la douceur du sucre, la légèreté du rhum blanc et le pétillant de l’eau gazeuse pour une expérience désaltérante et exotique.',
  };
}
