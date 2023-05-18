import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '#appHighlight',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = '';
  @Input() in = 'yellow';
  @Input() out = 'red';
  // Quelle propriétéS d'apparence je dois gérer
  @HostBinding('style.backgroundColor') bgc!: string;
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
    console.log(this.appHighlight);
  }
  // Quelle comportement je dois avoir et suite à quel event
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
