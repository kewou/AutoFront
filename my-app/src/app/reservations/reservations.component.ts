import { Component, OnInit } from '@angular/core';
import {ReservationService} from './service/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './assets/reservations.component.html',
  styleUrls: ['./assets/reservations.component.css']
})


export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  reservationSelectionner: Reservation;

  resa: Reservation = {
    id: 1,
    dateResa: new Date(),
    etatResa: 'enCours',
    userId: 1
  };

  constructor(private reservationService:ReservationService) { }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  onSelect(reservation:Reservation): void{
    this.reservationSelectionner=reservation;
  }

  ngOnInit() {
    this.getReservations();
  }

}
