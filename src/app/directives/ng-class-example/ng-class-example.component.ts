import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css'],
})
export class NgClassExampleComponent {
  isEteinte = true;

  interrupteur() {
    this.isEteinte = ! this.isEteinte;
  }
}
