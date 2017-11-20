import { Injectable } from '@angular/core';
import {RESERVATIONS} from '../mock/mock-reservations';


@Injectable()
export class ReservationService {

  constructor() { }

  getReservations(): Reservation[]{
    return RESERVATIONS;
  }

}
