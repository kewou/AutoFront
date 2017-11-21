import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import {ReservationService} from './reservations/service/reservation.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/service/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    MessagesComponent,
    DashboardComponent,
    ReservationsDetailComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReservationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
