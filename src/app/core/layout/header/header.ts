import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // OPCIONAL: Fecha menu ao clicar fora (melhor usabilidade)
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');

    // Se clicou fora do menu e fora do hamburger, fecha o menu
    if (this.isMenuOpen &&
      !menu?.contains(target) &&
      !hamburger?.contains(target)) {
      this.closeMenu();
    }
  }

}
