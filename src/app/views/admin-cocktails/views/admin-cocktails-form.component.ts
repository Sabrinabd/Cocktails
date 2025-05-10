import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [ReactiveFormsModule],
  template: `
    <h3 class="mb-20">Création d'un cocktail</h3>
    <form [formGroup]="cocktailForm" (submit)="submit()">
      <div class="flex flex-col gap-12 mb-10">
        <label for="name">Nom du cocktail</label>
        <input formControlName="name" id="name" type="text" />
        @if (nameControl.errors?.['required'] && nameControl.touched) {
        <p class="error">Le nom du cocktail est obligatoire</p>
        }
      </div>

      <div class="flex flex-col gap-12 mb-10">
        <label for="imageUrl">Nom du cocktail</label>
        <input formControlName="imageUrl" id="imageUrl" type="text" />
      </div>

      <div class="flex flex-col gap-12 mb-10">
        <label for="description">Description du cocktail</label>
        <textarea
          formControlName="description"
          id="description"
          cols="3"
        ></textarea>
      </div>

      <div class="flex align-items-center gap-12 mb-10">
        <label class="flex-auto">Ingrédients</label>
        <button (click)="addIngredient()" class="btn btn-primary ">
          Ajouter
        </button>
      </div>
      <ul>
        @for ( ingredient of ingredientsControl.controls; track $index) {
        <li class="flex align-items-center gap-12 mb-10">
          <input class="flex-auto" [formControlName]="$index" type="text" />
          <button (click)="deleteIngredient($index)" class="btn btn-danger">
            Supprimer
          </button>
        </li>
        }
      </ul>

      <div>
        <button [disabled]="cocktailForm.invalid" class="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  `,
  host: { class: 'card' },
  styles: ` .card { padding: 8px; }`,
})
export class AdminCocktailsFormComponent {
  private fb = inject(FormBuilder);

  cocktailForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: [''],
    description: [''],
    ingredients: this.fb.array([]),
  });

  get ingredientsControl() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  get nameControl() {
    return this.cocktailForm.get('name') as FormControl;
  }

  addIngredient() {
    this.ingredientsControl.push(this.fb.control(''));
  }

  deleteIngredient(index: number) {
    this.ingredientsControl.removeAt(index);
  }

  submit() {
    console.log(this.cocktailForm.value);
  }
}
