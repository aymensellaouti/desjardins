import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class SayHello {
  constructor(
    private loggerService: LoggerService
  ) {}
  hello() {
    this.loggerService.logger('hello');
  }
}
