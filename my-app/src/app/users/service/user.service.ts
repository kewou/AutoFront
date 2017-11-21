import { Injectable } from '@angular/core';
import {User} from '../../users/modele/reservation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UserService {

  constructor() { }

  createUser(user: User): void{

  }

  getUser(id: number): Observable<User>{
    //return of(RESERVATIONS.find(resa => resa.id === id));
  }

  editUser(id: number): void{

  }

  deleteUser(id:number): void{

  }

  getAllUsers(): Observable<User[]>{
    //return of(RESERVATIONS);
  }

}
