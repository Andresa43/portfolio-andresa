import { Component, Input } from '@angular/core';


export interface TutorialFeature {
  text: string;
  checked: boolean;
  count?: string;
}

export interface TutorialInterface {
  title: string;
  description: string;
  // imageUrl?: string;
  imageAlt?: string;
  features: TutorialFeature[];
  accessLink?: string;
  downloadLink?: string;
  price?: string; // "Free" ou valor
}

@Component({
  selector: 'app-tutorial',
  imports: [],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.scss'
})
export class Tutorial {
  @Input() tutorial!: TutorialInterface;
}
