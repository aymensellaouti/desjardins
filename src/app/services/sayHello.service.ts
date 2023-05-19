import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SayHello {
  constructor(
    private loggerService: LoggerService,
    private http: HttpClient
  ) {}
  hello() {
    this.loggerService.logger('hello');
  }

  getTodos():Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
