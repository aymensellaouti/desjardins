import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  // Attributs (state 'état')
  name = 'aymen';
  isHidden = true;
  message = 'init';
  constructor() {}
  // méthodes (behaviour 'comportement')
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string): void {
    this.message = newMessage;
  }
}
