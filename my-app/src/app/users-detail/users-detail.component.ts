import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../users/modele/user';
import {UserService} from '../users/service/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './assets/users-detail.component.html',
  styleUrls: ['./assets/users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  saveUser(id: number): void{
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



  ngOnInit() {
    this.getUser();
  }

}
