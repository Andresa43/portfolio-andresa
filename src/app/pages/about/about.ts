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
      jobTitle: 'Head of Product Design',
      company: 'Profila 💹',
      period: 'Feb 2022 - Nov 2023',
      duration: '1 yr 10 mos',
      location: 'Switzerland-based project (Remote)',
      tags: [
        { text: 'Web3', className: 'primary' },
        { text: 'Crypto', className: 'primary' },
        { text: 'NFT', className: 'primary' },
        { text: 'Web-platform', className: 'primary' },
        { text: 'FinTech', className: 'primary' }
      ],
      companyDescription: 'A Cardano Web 3.0 Switzerland-based unicorn startup transforming brand-consumer interactions and secure data sharing across B2C and C2B platforms, backed by over $2 million in funding.',
      achievements: [
        'Designed and launched a responsive platform from scratch, conducting pre-launch testing to identify and prioritize issues using a data-driven approach.',
        'Led the design team and established structured design processes to enhance collaboration between the design team and C-level management.',
        'Reduced estimated churn rate by up to 60% and minimized financial losses through qualitative feedback analysis before launch for core features, including communication between brands and individuals, and gamification.',
        'Built UX information architecture for B2C, C2B, and Admin platforms, enhancing usability and navigation.',
        'Developed a design system in a short timeframe, optimizing the design process.'
      ],
      relatedProject: {
        title: 'Swiss crypto-startup Profile:',
        description: 'Web 3.0 on Cardano. Secure data sharing, brand interaction, and NFTs.',
        link: 'https://example.com/project'
      }
    },
        {
      jobTitle: 'Head of Product develop',
      company: 'Profila 💹',
      period: 'Feb 2022 - Nov 2023',
      duration: '1 yr 10 mos',
      location: 'Switzerland-based project (Remote)',
      tags: [
        { text: 'Web3', className: 'primary' },
        { text: 'Crypto', className: 'primary' },
        { text: 'NFT', className: 'primary' },
        { text: 'Web-platform', className: 'primary' },
        { text: 'FinTech', className: 'primary' }
      ],
      companyDescription: 'A Cardano Web 3.0 Switzerland-based unicorn startup transforming brand-consumer interactions and secure data sharing across B2C and C2B platforms, backed by over $2 million in funding.',
      achievements: [
        'Designed and launched a responsive platform from scratch, conducting pre-launch testing to identify and prioritize issues using a data-driven approach.',
        'Led the design team and established structured design processes to enhance collaboration between the design team and C-level management.',
        'Reduced estimated churn rate by up to 60% and minimized financial losses through qualitative feedback analysis before launch for core features, including communication between brands and individuals, and gamification.',
        'Built UX information architecture for B2C, C2B, and Admin platforms, enhancing usability and navigation.',
        'Developed a design system in a short timeframe, optimizing the design process.'
      ],
      relatedProject: {
        title: 'Swiss crypto-startup Profile:',
        description: 'Web 3.0 on Cardano. Secure data sharing, brand interaction, and NFTs.',
        link: 'https://example.com/project'
      }
    },
    // Adicione mais experiências aqui se quiser
  ];
}
