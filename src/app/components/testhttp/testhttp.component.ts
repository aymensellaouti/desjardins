import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SayHello } from 'src/app/services/sayHello.service';

@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css']
})
export class TesthttpComponent {
  todos$: Observable<any>;
  constructor(
    private sayHello: SayHello
  ) {
      this.todos$ = this.sayHello.getTodos();
  }
}
