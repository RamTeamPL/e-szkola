import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassAnnouncementsPage } from './class-announcements.page';

const routes: Routes = [
  {
    path: '',
    component: ClassAnnouncementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassAnnouncementsPageRoutingModule {}
