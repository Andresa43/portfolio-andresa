import { Component } from '@angular/core';
import { Tutorial, TutorialInterface } from '../../shared/tutorial/tutorial';

@Component({
  selector: 'app-downloads',
  imports: [
    Tutorial
  ],
  templateUrl: './downloads.html',
  styleUrl: './downloads.scss'
})
export class Downloads {
  // No seu component
  tutorials: TutorialInterface[] = [
    {
      title: 'Como converter imagens WebP pelo terminal',
      description: 'O WebP é um formato de imagem moderno que oferece compressão superior (até 30% menor que JPEG/PNG) sem perda significativa de qualidade.',
      // imageUrl: 'assets/images/webp.webp',
      features: [
        { text: 'Reduz tempo de carregamento.', checked: true },
        { text: 'Mantem a qualidade.', checked: true },
        { text: 'Menos espaço armazenado.', checked: true },
      ],
      accessLink: 'https://docs.google.com/document/d/1Br-MkJqvhyB8QNRcLH3AJH4bsj01Ds8YwhJtWfZpO-o/edit?usp=sharing',
      downloadLink: 'assets/downloads/Tutorial_ Como criar imagens WebP com a linha de comando.pdf',
      price: 'Free'
    },
    {
      title: 'Trabalhando com diferentes versões do Angular e Node.js',
      description: 'Principal objetivo: ter versões diferentes do angular e node.js na sua máquina.',
      // imageUrl: 'assets/images/imagegenerica.jpg',
      features: [
        { text: 'Diferentes versões do Angular', checked: true },
        { text: 'Diferentes versões do Node.js', checked: true },
      ],
      accessLink: 'https://docs.google.com/document/d/1_u-jigh3Aqwrs30j6vx0pqkDG3uKZsxQ/edit?usp=sharing&ouid=107873131700078925051&rtpof=true&sd=true',
      downloadLink: 'assets/downloads/Tutorial NVM e Angular.pdf',
      price: 'Free'
    },
    {
      title: 'Tutorial Completo: como publicar projeto angular no GitHub Pages',
      description: 'Principal objetivo: ter o seu site publicado/hospedado no GitHub',
      // imageUrl: 'assets/images/imagegenerica.jpg',
      features: [
        { text: 'Deploy', checked: true },
        { text: 'angular-cli-ghpages', checked: true },
      ],
      accessLink: 'https://docs.google.com/document/d/1FdaOo5pNN9aKpOIScdr1DqNnz3VTRZ-eBgZbYbEdC58/edit?usp=sharing',
      downloadLink: 'assets/downloads/Tutorial Completo_ Como Publicar Projeto Angular no GitHub Pages.pdf',
      price: 'Free'
    }
  ];
}
