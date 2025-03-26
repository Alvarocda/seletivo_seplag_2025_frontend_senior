import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'detalhes-desaparecido/:id',
    loadChildren: () =>
      import(
        './modules/detalhes-desaparecido/detalhes-desaparecido.module'
      ).then((m) => m.DetalhesDesaparecidoModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];
