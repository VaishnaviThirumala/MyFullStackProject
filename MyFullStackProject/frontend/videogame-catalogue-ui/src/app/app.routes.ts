import { Routes } from '@angular/router';
import { BrowseGamesComponent } from './pages/browse-games/browse-games';
import { EditGameComponent } from './pages/edit-game/edit-game';
import { CreateGameComponent } from './pages/create-game/create-game';

export const routes: Routes = [
    { path: '', component: BrowseGamesComponent },
    { path: 'edit/:id', component: EditGameComponent },
    { path: 'create', component: CreateGameComponent },
  ];  
