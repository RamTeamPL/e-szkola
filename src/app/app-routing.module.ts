import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './folder/competitions/competitions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/competitions',
    pathMatch: 'full'
  },
  {
    path: 'competitions',
    component: CompetitionsComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
