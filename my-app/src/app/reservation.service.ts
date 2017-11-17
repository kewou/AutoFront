import { Injectable } from '@angular/core';
import {Reservation} from './reservations/reservatoin';
import {RESERVATIONS} from './reservations/mock-reservations';

@Injectable()
export class ReservationService {

  constructor() { }

  getReservations() Reservation[]{
    return RESERVATIONS;
  }

}
