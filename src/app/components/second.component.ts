import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      In Second
    </p>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit, AfterViewInit {
  @Input() message= '';
  constructor() {
    console.log('constructor', this.message);
  }
  ngOnInit(): void {
    console.log('ngOnInit',this.message);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.message);
  }
}
