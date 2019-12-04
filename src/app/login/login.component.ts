import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  
  constructor() { }
  @Output() messageEvent = new EventEmitter<string>();
  
  message: string = "Member Login: "
  
  ngOnInit() {
  }
  
  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
