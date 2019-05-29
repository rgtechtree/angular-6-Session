import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit, OnDestroy {

  description = 'this is app';
  flag = false;
  num = 10;
  obj = { title: 'Angular 6' };
  colors = ['White', 'Green'];
  subscribtion: Subscription;

  userData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscribtion = this.dataService.getdata.subscribe(
      (res) => {
        if (res) {
          console.log(res)
          this.userData = res;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
  addNewColor() {
    this.colors.push('Blue');
  }

}
