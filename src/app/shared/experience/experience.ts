import { Component, Input } from '@angular/core';
import { Tag, TagData } from '../tag/tag';


export interface RelatedProject {
  title: string;
  description: string;
  link: string;
}

export interface ExperienceData {
  jobTitle: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  tags: TagData[];
  companyDescription: string;
  achievements: string[];
  relatedProject?: RelatedProject;
}

@Component({
  selector: 'app-experience',
  imports: [
    Tag
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() experience!: ExperienceData;
}
