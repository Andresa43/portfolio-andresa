import { Component, Input } from '@angular/core';

export interface TagData {
  text: string;
  iconSrc?: string; // Caminho para o SVG
  className?: string; // Para variações de estilo
}

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class Tag {
  @Input() tags: TagData[] = [];
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
