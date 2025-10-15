import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/playlist/pl-1', pathMatch: 'full' },
  {
    path: 'playlist/:id',
    loadComponent: () => import('./views/playlist-view/playlist-view').then(m => m.PlaylistViewComponent)
  }
];