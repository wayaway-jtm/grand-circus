import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    this.logCount = 0;
  }

  logCount : number;

  log(args: any) : void {
    this.logCount++;
    console.log(args, `You have now logged ${this.logCount} messages. Have a great day!`);
  }
}
