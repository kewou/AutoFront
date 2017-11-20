import { Component, OnInit } from '@angular/core';
import {ReservationService} from './service/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './assets/reservations.component.html',
  styleUrls: ['./assets/reservations.component.css']
})


export class ReservationsComponent implements OnInit {
  resa: Reservation = {
    id: 1,
    dateResa: new Date(),
    etatResa: 'enCours',
    userId: 1
  };

  reservations: Reservation[];


  constructor(private reservationService:ReservationService) { }

  getReservations(): void {
    this.reservations =this.reservationService.getReservations();
  }

  ngOnInit() {
    this.getReservations();
  }

}
