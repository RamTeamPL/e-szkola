import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'competitions',
    pathMatch: 'full',
  },
  {
    path: 'competitions',
    loadChildren: () => import('./pages/competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },
  {
    path: 'school-announcements',
    loadChildren: () => import('./pages/school-announcements/school-announcements.module').then( m => m.SchoolAnnouncementsPageModule)
  },
  {
    path: 'class-announcements',
    loadChildren: () => import('./pages/class-announcements/class-announcements.module').then( m => m.ClassAnnouncementsPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'competitions',
    loadChildren: () => import('./pages/competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },
  {
    path: 'fundraisers',
    loadChildren: () => import('./pages/fundraisers/fundraisers.module').then( m => m.FundraisersPageModule)
  },
  {
    path: 'government',
    loadChildren: () => import('./pages/government/government.module').then( m => m.GovernmentPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./pages/trips/trips.module').then( m => m.TripsPageModule)
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then( m => m.LearnPageModule)
  },
  {
    path: 'surveys',
    loadChildren: () => import('./pages/surveys/surveys.module').then( m => m.SurveysPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
