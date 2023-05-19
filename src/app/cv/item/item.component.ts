import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  // @Output() selectCv = new EventEmitter<Cv>()
  constructor(private cvService: CvService) {}
  onSelectCv() {
    // Emettre un event disant que le cv a été sélectionné et de passer le cv en question
    if (this.cv)
      this.cvService.selectCv(this.cv);
  };
}
