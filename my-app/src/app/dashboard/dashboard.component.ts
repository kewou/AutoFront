import { Component, OnInit } from '@angular/core';
import {Reservation} from '../reservations/modele/reservation';
import {ReservationService} from '../reservations/service/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './assets/dashboard.component.html',
  styleUrls: ['./assets/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  getReservations(): void{
    this.reservationService.getReservations()
    .subscribe(reservations => this.reservations = reservations.slice(1,3));
  }

  ngOnInit() {
    this.getReservations();
  }

}
