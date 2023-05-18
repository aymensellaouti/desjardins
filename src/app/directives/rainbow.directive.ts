import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  // Quelles propriétéS d'apparence je dois gérer
  @HostBinding('style.color') color : string = 'black';
  @HostBinding('style.borderColor') bc : string = 'black';
  @HostBinding('style.border') border : string = 'black 3px solid';
  constructor() {}
  // Quelle comportement je dois avoir et suite à quel event
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
