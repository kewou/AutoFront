import { Component, OnInit } from '@angular/core';
import {ReservationService} from './service/reservation.service';
import {Reservation} from './modele/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './assets/reservations.component.html',
  styleUrls: ['./assets/reservations.component.css']
})


export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  selectedResa: Reservation;

  // resa: Reservation = {
  //   id: 1,
  //   dateResa: new Date(),
  //   etatResa: 'enCours',
  //   moniteurId: 1
  // };

  constructor(private reservationService:ReservationService) { }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  onSelect(reservation:Reservation): void{
    this.selectedResa=reservation;
  }

  ngOnInit() {
    this.getReservations();
  }

}
