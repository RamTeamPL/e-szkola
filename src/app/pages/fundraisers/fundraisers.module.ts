import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundraisersPageRoutingModule } from './fundraisers-routing.module';

import { FundraisersPage } from './fundraisers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundraisersPageRoutingModule
  ],
  declarations: [FundraisersPage]
})
export class FundraisersPageModule {}
