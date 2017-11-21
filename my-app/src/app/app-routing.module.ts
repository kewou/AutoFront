import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsDetailComponent} from './reservations-detail/reservations-detail.component';
import { UsersComponent} from './users/users.component';
import { UsersDetailComponent} from './users-detail/users-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'reservations/:id', component: ReservationsDetailComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UsersDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}
