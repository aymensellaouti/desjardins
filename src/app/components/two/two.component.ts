import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
    two = 'init Value';

    resetTwo() {
      this.two = 'the initial Value';
    }
}
