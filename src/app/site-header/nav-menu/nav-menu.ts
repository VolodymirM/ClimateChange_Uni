import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  styleUrl: './nav-menu.scss',
  templateUrl: './nav-menu.html',
})
export class NavMenu {
  isOpen = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }
}
