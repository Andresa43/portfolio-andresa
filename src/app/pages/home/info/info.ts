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

  memoteca: ProductCardData = {
    imageUrl: 'assets/images/memoteca.png', // Caminho da imagem
    category: 'Angular',
    title: 'Memoteca',
    description: 'Sua biblioteca digital de inspiração. Armazene trechos de música, citações de livros, pensamentos e ideias em uma interface intuitiva desenvolvida em Angular 14.',
    highlights: [
      // { value: '', label: '' },
    ],
    items: ['Angular14', 'CRUD', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://github.com/Andresa43/memoteca'
  };

  sorveteria: ProductCardData = {
    imageUrl: 'assets/images/sorveteria.png', // Caminho da imagem
    category: 'Estilo',
    title: 'Exposição de Doces',
    description: 'Catálogo digital responsivo para confeitarias. Apresenta produtos de forma visualmente atraente e organizada, adaptando-se a qualquer dispositivo.',
    highlights: [
      // { value: '', label: '' },
    ],
    items: ['GRID & Flexbox', 'HTML', 'CSS', 'Git & Github', 'Responsividade'],
    projectLink: 'https://codepen.io/andresafernandes/pen/WNYRbJN'
  };

  dicionario: ProductCardData = {
    imageUrl: 'assets/images/dicionario-mulheres.png', // Caminho da imagem
    category: 'Javascript',
    title: 'Dicionário de Mulheres Negras',
    description: 'Plataforma educativa que celebra e preserva o legado de mulheres negras na história do Brasil e do mundo. Um tributo digital àquelas que fizeram e ainda fazem a diferença.',
    highlights: [
      // { value: '', label: '' },
    ],
    items: ['DOM Manipulation', 'HTML', 'CSS', 'Git & Github', 'Responsividade'],
    projectLink: 'https://andresa43.github.io/dicionario-mulheres-negras/'
  };

  // aztechData: ProductCardData = {
  //   imageUrl: 'assets/images/imagegenerica.jpg',
  //   category: 'Cycle / Web 3',
  //   title: 'Aztech',
  //   description: 'Web3 data-sharing platform for brand engagement. Gives users data ownership and brands richer insights — at scale.',
  //   highlights: [
  //     { value: '2M+', label: 'raised funds' },
  //     { value: '3', label: 'integrated parties' }
  //   ],
  //   items: ['Data Ownership', 'Brand Insights', 'Web3 Integration', 'User Rewards']
  // };

}
