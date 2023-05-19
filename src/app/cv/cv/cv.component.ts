import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHello } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(
    private helloService: SayHello,
    private logger: LoggerService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.helloService.hello();
    this.logger.logger('cc from CvComponent');
    this.toastr.info('Bienvenu :)');
    this.cvs = this.cvService.getCvs();
    this.cvService.selectCv$
    .pipe(distinctUntilChanged())
    .subscribe({
      next: () => this.nb++
    }
  )
  }
  selectedCv: Cv | null = null;
  nb = 0;
  date = new Date();
  cvs: Cv[] = [];
  // selectCv(cv: Cv): void {
  //   this.selectedCv = cv;
  //   this.todoService.loggerTodos();
  // }
}
