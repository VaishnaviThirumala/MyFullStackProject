import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowseGamesComponent } from './app/pages/browse-games/browse-games';
import { EditGameComponent } from './app/pages/edit-game/edit-game';
import { CreateGameComponent } from './app/pages/create-game/create-game';

const routes: Routes = [
  { path: '', component: BrowseGamesComponent },
  { path: 'edit/:id', component: EditGameComponent },
  { path: 'create', component: CreateGameComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
