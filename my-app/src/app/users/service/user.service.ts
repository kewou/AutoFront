import { Injectable } from '@angular/core';
import {User} from '../../users/modele/user';
import {Reservation} from '../../reservations/modele/reservation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from '../../messages/service/message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class UserService {

  private usersUrl ='http://localhost/Beezy/AutoEcole/web/app_dev.php/api/users';
  private resaUrl ='api/reservations';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getAllUsers',[]))
      );
  }
// getReservation(id:number):Observable<Reservation>{
//
// }

  /** POST: add a new user to the server */
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap((user: User) => this.log(`added user w/ id=${user.getId()}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  getUser(id: number): Observable<User>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** PUT: update the user on the server */
  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.getId()}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }


  /** DELETE: delete the user from the server */
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.getId();
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

}
