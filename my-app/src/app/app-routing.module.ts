import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationsComponent } from './reservations/reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}
