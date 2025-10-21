import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


export interface Poetry {
  text: string; // Aceita <br> e HTML básico
  author?: string;
  reference?: string;
  imageUrl?: string;
  imageAlt?: string;
  audioUrl?: string;
  recitedBy?: string;
}

@Component({
  selector: 'app-poesias',
  imports: [],
  templateUrl: './poesias.html',
  styleUrl: './poesias.scss'
})
export class Poesias {
  @Input() poetry?: Poetry;

  constructor(private readonly sanitizer: DomSanitizer) { }

  // Processa o texto para permitir HTML seguro
  getSafeHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
