import { Component, OnInit, Input } from '@angular/core';
import {Reservation} from '../reservations/modele/reservation';

@Component({
  selector: 'app-reservations-detail',
  templateUrl: './assets/reservations-detail.component.html',
  styleUrls: ['./assets/reservations-detail.component.css']
})
export class ReservationsDetailComponent implements OnInit {

  @Input() resa: Reservation;

  constructor() { }

  ngOnInit() {
  }

}
