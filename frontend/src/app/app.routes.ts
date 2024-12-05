import { Routes } from '@angular/router';
import { AuthPage } from './pages/login/auth/auth.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  {
    path: 'auth/login',
    component: AuthPage,
  },
];
