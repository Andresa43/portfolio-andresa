import { Component, Input } from '@angular/core';


export interface ProductCardData {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  highlights: { value: string; label: string }[];
  items: string[];

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
  @Input() imageHeight: string = '200px'; // Controle da altura da imagem

}
