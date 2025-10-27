import { PoetryCanvas } from './pages/poetry-canvas/poetry-canvas';
import { Routes } from '@angular/router';
import { Info } from './pages/home/info/info';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Downloads } from './pages/downloads/downloads';

export const routes: Routes = [
    { path: '', pathMatch: 'full', title: 'Portfólio Andresa Fernandes', component: Info },
    { path: 'contato', title: 'contato', component: Contact },
    { path: 'sobre', title: 'sobre', component: About },
    { path: 'poesias', title: 'poesias', component: PoetryCanvas },
    { path: 'downloads', title: 'downloads', component: Downloads },
];
