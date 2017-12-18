import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {UserService} from './service/user.service';
import {User} from './modele/user';

@Component({
  selector: 'app-users',
  templateUrl: './assets/users.component.html',
  styleUrls: ['./assets/users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers():void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
