import { Component, OnInit } from '@angular/core';
import {MessageService} from './service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './assets/messages.component.html',
  styleUrls: ['./assets/messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
