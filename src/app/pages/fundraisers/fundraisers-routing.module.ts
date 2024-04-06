import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundraisersPage } from './fundraisers.page';

const routes: Routes = [
  {
    path: '',
    component: FundraisersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundraisersPageRoutingModule {}
