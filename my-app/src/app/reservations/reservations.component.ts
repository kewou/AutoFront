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
  reservationSelectionner: Reservation;

  constructor(private reservationService:ReservationService) { }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  ngOnInit() {
    this.getReservations();
  }

  onSelect(reservation:Reservation): void{
    this.reservationSelectionner=reservation;
  }

}
