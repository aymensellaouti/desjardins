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
    this.cvService.getCvById(+id).subscribe({
      next: (cv) => this.cv = cv,
      error: (e) => this.router.navigate([MES_ROUTES.cv])
    });
  }
  deleteCv(cv: Cv) {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {
          this.toaster.success(
            `Le cv a été supprimé avec succès`
          );
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: (e) => {
          console.log('erreur suppression',e);
        }
      });

    }
  };
}
