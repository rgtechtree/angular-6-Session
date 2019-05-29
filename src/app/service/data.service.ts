import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public sendData = new BehaviorSubject('');
  getdata = this.sendData.asObservable();

  constructor() { }

  sendingDataToOtherComponent(data){
    this.sendData.next(data);
  }
}
