import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[];
  constructor() {
    this.cvs = [
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
      new Cv(3, 'test', 'tes', '7777', 4, 'student', ''),
      new Cv(4, 'test', 'tes', '7777', 4, 'student', '                    '),
    ];
  }

  getCvs(): Cv[] {
    return this.cvs;
  }
}
