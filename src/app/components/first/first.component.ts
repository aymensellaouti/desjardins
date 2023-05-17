import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  isHidden = true;
  message = '';
  constructor() {}
  // Attributs (state 'état')
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string): void {
    this.message = newMessage;
  }
  // méthodes (behaviour 'comportement')
}
