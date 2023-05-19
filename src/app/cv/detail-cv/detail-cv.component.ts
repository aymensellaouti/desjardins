import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  cv: Cv | null = null;

  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvService.selectCv$.pipe(distinctUntilChanged()).subscribe({
      next: (cv) => (this.cv = cv),
    });
  }
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(`${this.cv.name} a été embauché avec succès`);
      } else {
        this.toastr.warning(`${this.cv.name} est déjà embauché`);
      }
    }
  }
}
