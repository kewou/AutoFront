import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './assets/accueil.component.html',
  styleUrls: ['./assets/accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private img1 = require("./assets/images/pic01.jpg");
  private img2 = require("./assets/images/pic02.jpg");
  private img3 = require("./assets/images/pic03.jpg");
  private img4 = require("./assets/images/pic04.jpg");
  private img5 = require("./assets/images/pic05.jpg");
  private banner = require("./assets/images/banner.jpg");
  constructor() {}

  ngOnInit() {
  }

}
