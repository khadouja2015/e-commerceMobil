import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleurPageRoutingModule } from './fleur-routing.module';

import { FleurPage } from './fleur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleurPageRoutingModule
  ],
  declarations: [FleurPage]
})
export class FleurPageModule {}
