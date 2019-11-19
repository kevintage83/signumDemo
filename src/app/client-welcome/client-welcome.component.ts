import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-welcome',
  templateUrl: './client-welcome.component.html',
  styleUrls: ['./client-welcome.component.scss']
})
export class ClientWelcomeComponent {
  message: string = "From the client-welcome.ts file"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
