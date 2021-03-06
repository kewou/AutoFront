import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsDetailComponent} from './reservations-detail/reservations-detail.component';
import { UsersComponent} from './users/users.component';
import { UsersDetailComponent} from './users-detail/users-detail.component';
import {MenuComponent} from './menu/menu.component';
import {AppComponent} from './app.component';
import {AProposComponent} from './a-propos/a-propos.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {CalendrierComponent} from './calendrier/calendrier.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AccueilComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: 'calendrier', component: CalendrierComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'inscription', component: InscriptionComponent},
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
