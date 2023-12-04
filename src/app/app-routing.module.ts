import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/division/division.module').then((m) => m.DivisionModule),
  },
];

