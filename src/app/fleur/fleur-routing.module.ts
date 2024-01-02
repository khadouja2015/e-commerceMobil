import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleurPage } from './fleur.page';

const routes: Routes = [
  {
    path: '',
    component: FleurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleurPageRoutingModule {}
