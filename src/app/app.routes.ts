import { PoetryCanvas } from './pages/poetry-canvas/poetry-canvas';
import { Routes } from '@angular/router';
import { Info } from './pages/home/info/info';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Downloads } from './pages/downloads/downloads';

export const routes: Routes = [
    { path: '', pathMatch: 'full', title: 'Portfólio Andresa Fernandes', component: Info },
    { path: 'contato', title: 'Contato', component: Contact },
    { path: 'sobre', title: 'Sobre mim', component: About },
    { path: 'poesias', title: 'Poesias', component: PoetryCanvas },
    { path: 'downloads', title: 'Downloads', component: Downloads },
];
