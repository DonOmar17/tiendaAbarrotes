import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent {
  constructor(private menu: MenuController) {}

  closeMenu() {
    this.menu.close('first'); // Cierra el menú
  }
}
