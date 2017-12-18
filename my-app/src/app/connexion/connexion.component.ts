import { Component, OnInit } from '@angular/core';

import {User} from '../users/modele/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './assets/connexion.component.html',
  styleUrls: ['./assets/connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userModel = new User(3,"beezy","thug","djodjoman@yahoo.fr","assita",[],29);
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
