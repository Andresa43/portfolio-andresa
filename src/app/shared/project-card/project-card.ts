// project-card.ts - ADICIONE ESTE MÉTODO
import { Component, Input } from '@angular/core';

export interface ProductCardData {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  highlights: { value: string; label: string }[];
  items: string[];
  projectLink?: string; // ← ADICIONE esta propriedade opcional
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() productData!: ProductCardData;
  @Input() cardWidth: string = '400px';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() imageHeight: string = '200px';

  // Método para visualizar o projeto
  viewProject() {
    if (this.productData.projectLink) {
      // Se tem link, abre em nova aba
      window.open(this.productData.projectLink, '_blank', 'noopener,noreferrer');
    } else {
      // Se não tem link, pode fazer outra ação
      console.log('Visualizar projeto:', this.productData.title);
      // Ou emitir um evento para o componente pai
    }
  }
}