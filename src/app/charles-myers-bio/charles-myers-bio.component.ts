import { Component, OnInit, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-charles-myers-bio',
  templateUrl: './charles-myers-bio.component.html',
  styleUrls: ['./charles-myers-bio.component.sass']
})
export class CharlesMyersBioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable()
export class MessageService {
  private message = new Subject<any>();
  constructor() { }
  // the type can be used in case you want to classify the alert
  sendMessage(message: string, type = 1) { 
     this.message.next({text: message, type: type});
  }
  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
  clearMessage() {
    this.message.next();
  }
}