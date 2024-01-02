import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'fleur',
    loadChildren: () => import('./fleur/fleur.module').then( m => m.FleurPageModule)
  },
  {
    path: 'head',
    loadChildren: () => import('./pages/head/head.module').then( m => m.HeadPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./pages/formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  
  {
    path: 'formulaire/:total',
    loadChildren: () => import('./pages/formulaire/formulaire.module').then( m => m.FormulairePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}