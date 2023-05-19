import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  defaultColor = 'red';
  color = '';
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot);
    this.defaultColor = activatedRoute.snapshot.params['defaultColor'];
    this.color = this.defaultColor;
  }
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  // changeDefaultColor() {
  //   this.color = this.defaultColor;
  // }
}
