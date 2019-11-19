import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent implements OnInit {

  constructor() { }

  message= "from the client-home-page.component"

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event
  }

}
