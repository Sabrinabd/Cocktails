import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h3 class="flex-auto text-bold text-lg">cocktails</h3>
    <ul>
      <li class="flex flex-row gap-16">
        <a href="#">Liste des cocktails</a>
        <a href="#">Panier</a>
      </li>
    </ul>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      background-color: var(--primary);
      align-items: center;
      color: white;
      height: 60px;
      padding: 0 16px;
    }`,
})
export class HeaderComponent {}
