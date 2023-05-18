import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  date = new Date();
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      '1234',
      40,
      'trainer',
      'rotating_card_profile.png'
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      '7777',
      4,
      'student',
      'rotating_card_profile2.png'
    ),
    new Cv(
      3,
      'test',
      'tes',
      '7777',
      4,
      'student',
      ''
    ),
    new Cv(
      4,
      'test',
      'tes',
      '7777',
      4,
      'student',
      '                    '
    ),
  ];
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
