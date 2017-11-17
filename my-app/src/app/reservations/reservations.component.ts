import { Component, OnInit } from '@angular/core';
import {Reservation} from '../reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})


export class ReservationsComponent implements OnInit {
  resa: Reservation = {
    id: 1,
    dateResa: new Date(),
    etatResa: 'enCours',
    userId: 1
  };
  constructor() { }

  ngOnInit() {
  }

}
