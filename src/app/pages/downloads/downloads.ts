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
      title: 'Typing in Figma prototype',
      description: 'Prioritize your MVP features like a PRO. Balance UX desirability with development feasibility.',
      // imageUrl: 'assets/images/webp.webp',
      features: [
        { text: 'Upper & lowercase letters', checked: true },
        { text: 'Symbols', checked: true },
        { text: 'Numbers', checked: true },
      ],
      accessLink: 'https://figma.com/community/file/123',
      downloadLink: 'assets/templates/typing-figma.fig',
      price: 'Free'
    },
    {
      title: 'Impact-effort matrix',
      description: 'Prioritize your MVP features like a PRO. Balance UX desirability with development feasibility.',
      // imageUrl: 'assets/images/imagegenerica.jpg',
      features: [
        { text: '3+ Matrix variations', checked: true },
        { text: '100+ Downloads', checked: true },
        { text: 'Customizable framework', checked: true }
      ],
      accessLink: 'https://figma.com/community/file/456',
      downloadLink: 'assets/templates/impact-matrix.fig',
      price: 'Free'
    }
  ];
}
