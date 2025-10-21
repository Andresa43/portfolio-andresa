import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectCard, ProductCardData } from '../../../shared/project-card/project-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [ProjectCard, RouterLink],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info implements OnInit, OnDestroy {

  phrases: string[] = [
    'criando sites,',
    'trabalhando com performance',
    'trabalhando com acessibilidade',
    'trabalhando com usabilidade'
  ];

  currentPhrase = '';
  currentIndex = 0;
  private animationInterval: any;

  constructor(readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.currentPhrase = this.phrases[0];
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  startRotation() {
    this.animationInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.currentIndex];

      this.cdr.detectChanges();

    }, 1000);
  }

  markTechData: ProductCardData = {
    imageUrl: '/assets/images/imagegenerica.jpg', // Caminho da imagem
    category: 'AI-powered SaaS',
    title: 'MarkTech',
    description: 'AI-powered marketing analytics for enterprise teams. Turns campaign data into real-time decisions & personalized content — at scale.',
    highlights: [
      { value: '$332M', label: 'exit' },
      { value: '+37%', label: 'user satisfaction' }
    ],
    items: ['Data Analytics', 'Network Analytics', 'Performance Tracking', 'ROI Optimization']
  };

  aztechData: ProductCardData = {
    imageUrl: '/assets/images/imagegenerica.jpg', // Caminho da imagem
    category: 'Cycle / Web 3',
    title: 'Aztech',
    description: 'Web3 data-sharing platform for brand engagement. Gives users data ownership and brands richer insights — at scale.',
    highlights: [
      { value: '2M+', label: 'raised funds' },
      { value: '3', label: 'integrated parties' }
    ],
    items: ['Data Ownership', 'Brand Insights', 'Web3 Integration', 'User Rewards']
  };

}
