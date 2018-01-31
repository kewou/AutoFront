import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import {ReservationService} from './reservations/service/reservation.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/service/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/service/user.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CalendrierComponent } from './calendrier/calendrier.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    MessagesComponent,
    DashboardComponent,
    ReservationsDetailComponent,
    UsersComponent,
    UsersDetailComponent,
    MenuComponent,
    AProposComponent,
    AccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    CalendrierComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ReservationService, MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
