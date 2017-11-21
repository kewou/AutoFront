import {Reservation} from '../../reservations/modele/reservation';

export class User{
  id: number;
  nom: string;
  prenom: string;
  email: string;
  reservations: Reservation[];
  idMoniteur: number;
}
