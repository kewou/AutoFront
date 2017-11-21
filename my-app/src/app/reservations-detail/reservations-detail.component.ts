import { Component, OnInit, Input } from '@angular/core';
import {Reservation} from '../reservations/modele/reservation';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ReservationService} from '../reservations/service/reservation.service';

@Component({
  selector: 'app-reservations-detail',
  templateUrl: './assets/reservations-detail.component.html',
  styleUrls: ['./assets/reservations-detail.component.css']
})
export class ReservationsDetailComponent implements OnInit {

  @Input() resa: Reservation;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) {}

  getUneRservation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservationService.getResa(id)
      .subscribe(resa => this.resa = resa);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUneRservation();
  }

}
