import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Output() selectCv = new EventEmitter<Cv>()
  onSelectCv() {
    // Emettre un event disant que le cv a été sélectionné et de passer le cv en question
    if (this.cv)
      this.selectCv.emit(this.cv);
  };
}
