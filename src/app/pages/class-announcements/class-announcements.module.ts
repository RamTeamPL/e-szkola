import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassAnnouncementsPageRoutingModule } from './class-announcements-routing.module';

import { ClassAnnouncementsPage } from './class-announcements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassAnnouncementsPageRoutingModule
  ],
  declarations: [ClassAnnouncementsPage]
})
export class ClassAnnouncementsPageModule {}
