import { Component } from '@angular/core';
import { HeaderMenuComponent } from './components/header-menu.component';

@Component({
  selector: 'app-header',
  imports: [HeaderMenuComponent],
  template: `
    <h3 class="flex-auto text-bold text-lg">cocktails</h3>
    <ul class="xs-hide flex flex-row gap-16">
      <li>
        <a href="#">Liste des cocktails</a>
      </li>
      <li>
        <a href="#">Panier</a>
      </li>
    </ul>
    <app-header-menu class="hide xs-show" />
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
