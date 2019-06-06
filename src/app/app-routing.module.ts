import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachesComponent } from './maches/maches.component';
import { GrapDetalsComponent } from './grap-detals/grap-detals.component';

const routes: Routes = [
  {
    path: 'maches/graph/:code',
    component: GrapDetalsComponent
  },
  {
    path: 'maches',
    component: MachesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
