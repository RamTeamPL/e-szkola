import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolAnnouncementsPageRoutingModule } from './school-announcements-routing.module';

import { SchoolAnnouncementsPage } from './school-announcements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolAnnouncementsPageRoutingModule
  ],
  declarations: [SchoolAnnouncementsPage]
})
export class SchoolAnnouncementsPageModule {}
