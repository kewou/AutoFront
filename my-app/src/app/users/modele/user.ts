import {Reservation} from '../../reservations/modele/reservation';

export class User{
  private id: number;
  private nom: string;
  private prenom: string;
  private email: string;
  private password: string;
  private reservations: Reservation[];
  private idMoniteur: number;

  constructor(
    private idUser: number,
    private nomUser: string,
    private prenomUser: string,
    private emailUser: string,
    private passwordUser: string,
    private reservationsUser: Reservation[],
    private idMoniteurUser: number) {
      this.id=idUser;
      this.nom=nomUser;
      this.prenom=prenomUser;
      this.email=emailUser;
      this.password=passwordUser;
      this.reservations=reservationsUser;
      this.idMoniteur=idMoniteurUser;
    }

    public getId(){
      return this.id;
    }
}
