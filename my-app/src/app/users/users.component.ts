import { Component, OnInit } from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './assets/users.component.html',
  styleUrls: ['./assets/users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
