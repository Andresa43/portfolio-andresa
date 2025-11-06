import { Component } from '@angular/core';
import { Tag, TagData } from '../../shared/tag/tag';
import { Experience, ExperienceData } from '../../shared/experience/experience';
import { RouterLink } from '@angular/router';

export interface GridPhoto {
  imageUrl: string;
  title: string;
  description: string;
  category?: string;
  gradient?: string;
}

@Component({
  selector: 'app-about',
  imports: [
    Tag,
    Experience,
    RouterLink
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  sectionTitle: string = 'Além do currículo';
  sectionSubtitle: string = 'Alguns fragmentos da minha vida';

  gridPhotos: GridPhoto[] = [
    {
      imageUrl: 'assets/images/yoga.jpg',
      title: 'Yoga',
      description: 'Momento de presença, respiração e paz',
      category: '',
      gradient: 'linear-gradient(to top, var(--text-color-acizentado), transparent)'
    },
    {
      imageUrl: 'assets/images/pelourinho.jpg',
      title: 'Andarilha',
      description: 'Turistando na minha cidade',
      category: '',
      gradient: 'linear-gradient(to top, var(--text-color-acizentado), transparent)'
    },
    {
      imageUrl: 'assets/images/academia.jpg',
      title: 'Movimento',
      description: 'Minha fonte de energia',
      category: '',
      gradient: 'linear-gradient(to top, var(--text-color-acizentado), transparent)'
    },
    {
      imageUrl: 'assets/images/praia.jpg',
      title: 'Lazer',
      description: 'Meu lugar preferido',
      category: '',
      gradient: 'linear-gradient(to top, var(--text-color-acizentado), transparent)'
    },
  ];

  handleImageError(event: any) {
    console.log('Erro ao carregar imagem:', event);
    // Você pode definir uma imagem placeholder como fallback
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gbsOjbyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
  }

  technicalSkills: TagData[] = [
    {
      text: 'Angular',
      iconSrc: 'assets/icons/angular_icon.gif',
      className: 'primary',
    },
    {
      text: 'TypeScript',
      iconSrc: 'assets/icons/typescript.png',
      className: 'primary',
    },
    {
      text: 'HTML',
      iconSrc: 'assets/icons/html.png',
      className: 'primary',
    },
    {
      text: 'CSS/Sass',
      iconSrc: 'assets/icons/css-3.png',
      className: 'primary',

    },
    {
      text: 'JavaScript',
      iconSrc: 'assets/icons/js.png',
      className: 'primary',
    },
    {
      text: 'Bootstrap',
      iconSrc: 'assets/icons/bootstrap.png',
      className: 'primary',
    },
    {
      text: 'WordPress',
      iconSrc: 'assets/icons/wordpress.png',
      className: 'primary',
    },
    {
      text: 'Git/GitHub',
      iconSrc: 'assets/icons/github_icon.png',
      className: 'primary',
    },
  ];

  ux: TagData[] = [
    {
      text: 'Acessibilidade digital',
      iconSrc: 'assets/icons/acessibilidade.png',
      className: 'primary',
    },
    {
      text: 'Usabilidade',
      iconSrc: 'assets/icons/usabilidade.png',
      className: 'primary',
    },
    {
      text: 'SEO',
      iconSrc: 'assets/icons/seo.png',
      className: 'primary',
    },
    {
      text: 'Perfomance',
      iconSrc: 'assets/icons/parafuso.png',
      className: 'primary',

    },
    {
      text: 'Figma',
      iconSrc: 'assets/icons/figma.png',
      className: 'primary',
    },
    {
      text: 'Canva',
      iconSrc: 'assets/icons/canva.png',
      className: 'primary',
    }
  ];

  personalSkill: TagData[] = [
    {
      text: 'Comunicação',
      iconSrc: 'assets/icons/comunicacao.png',
      className: 'primary',
    },
    {
      text: 'Criatividade',
      iconSrc: 'assets/icons/cerebro.png',
      className: 'primary',

    },
    {
      text: 'Metodologia Ágil',
      iconSrc: 'assets/icons/agil.png',
      className: 'primary',
    },
    {
      text: 'Gestão Pessoal',
      iconSrc: 'assets/icons/desenvolvimento-pessoal.png',
      className: 'primary',
    },
  ];

  experiences: ExperienceData[] = [
    {
      jobTitle: 'Analista Front-End',
      company: 'Grupo Terra Firme 🌎',
      period: 'Jun 2023 - o momento',
      duration: '2 a 6 m',
      location: 'Salvador, Bahia, Brasil (Presencial)',
      tags: [
        { text: 'Angular', className: 'primary' },
        { text: 'Typescript', className: 'primary' },
        { text: 'CSS BEM', className: 'primary' },
        { text: 'Acessibilidade', className: 'primary' },
        { text: 'Figma', className: 'primary' },
        { text: 'Usabilidade', className: 'primary' }

      ],
      companyDescription: 'Na ACB Processamento de Dados, atuo como analista front-end, desenvolvendo interfaces com Angular, TypeScript, HTML, CSS BEM, Javascript, Bootstrap e padrão MVC para sistemas internos e sites institucionais.',
      achievements: [
        'Desenvolvimento completo: criação do site Grupo Terra Firme do zero até o deploy, utilizando Angular e CSS BEM, além de recursos SEO.',
        'Otimização e Conclusão: atuei na finalização dos sites ASTEBA e ASSEBA com HTML, CSS, JavaScript e Bootstrap',
        'Prototipagem e UX: construção de interfaces no Figma para validação de usabilidade antes da implementação.',
        'Manutenção e Evolução: melhoria contínua de sistemas internos com criação de novas funcionalidades.'
      ],
      relatedProject: {
        title: 'Site empresarial',
        description: 'do zero ao deploy: trabalhei na construção do site empresarial com tecnologias atuais.',
        link: 'https://grupoterrafirme.com.br/'
      }
    },
    {
      jobTitle: 'Freelancer',
      company: 'Pronto para transformar a presença digital do seu negócio?',
      period: 'Abr de 2024 - o momento',
      duration: '1 a',
      location: 'Salvador, Bahia, Brasil (Remoto)',
      tags: [
        { text: 'Wordpress', className: 'primary' },
        { text: 'IA', className: 'primary' },
        { text: 'Canva', className: 'primary' },
        { text: 'Capcut', className: 'primary' },
        { text: 'Criatividade', className: 'primary' },
        { text: 'E muito mais...', className: 'primary' }

      ],
      companyDescription: 'Minha jornada profissional começou cedo (acho que sempre fui freela rs), com trabalhos como panfleteira, vendedora de brigadeiros e ambulante. Hoje, atuo como desenvolvedora front-end, sempre com foco no usuário final, criando interfaces intuitivas e fortalecendo marcas pessoais.',
      achievements: [
        'Minha atuação combina tecnologia, inteligência artificial e criatividade para impulsionar resultados e fortalecer a presença digital do seu negócio.',
        'Ao longo da minha trajetória, colaborei com marcas e projetos de destaque, como Cáren Cruz | Pittaco Consultoria, FLICA - Festa Literária Internacional de Cachoeira, Escola de Ativismo, Amba e Tocaia, entregando soluções que unem inovação e impacto.',
      ],
      // relatedProject: {
      //   title: 'Swiss crypto-startup Profile:',
      //   description: 'Web 3.0 on Cardano. Secure data sharing, brand interaction, and NFTs.',
      //   link: 'https://example.com/project'
      // }
    },
    // Adicione mais experiências aqui se quiser
  ];
}
