import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { MES_ROUTES } from 'src/app/config/routes.const';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-infos',
  templateUrl: './cv-infos.component.html',
  styleUrls: ['./cv-infos.component.css'],
})
export class CvInfosComponent {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cv = this.cvService.getCvById(+id);
    if (!this.cv) {
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
  deleteCv(cv: Cv) {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.toaster.success(`Le cv de ${this.cv.name} a été supprimé avec succès`);
      this.router.navigate([MES_ROUTES.cv]);
    }
  };
}
