import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  observable$: Observable<number>;
  constructor(private toaster: ToastrService) {
    this.observable$ = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$
    .subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    this.observable$.pipe(
      map((data) => data * 3),
      filter(x => !!(x % 2) ),
      ).subscribe({
      next: (data) => {
        this.toaster.info('' + data);
      },
      complete: () => {
        this.toaster.warning('Boom');
      },
      error: (e) => {},
    });
  }
}
