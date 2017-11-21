import { Injectable } from '@angular/core';
import {RESERVATIONS} from '../mock/mock-reservations';
import {Reservation} from '../modele/reservation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from '../../messages/service/message.service';


@Injectable()
export class ReservationService {

  constructor(private messageService: MessageService) { }

  getReservations(): Observable<Reservation[]>{
    this.messageService.add('Ci dessous la liste des résa');
    this.messageService.add('Thug Life');
    return of(RESERVATIONS);
  }

  getResa(id: number): Observable<Reservation>{
    this.messageService.add(`ReservationService: retourne une réservation id=${id}`);
    return of(RESERVATIONS.find(resa => resa.id === id));
  }

}
