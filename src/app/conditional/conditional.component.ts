import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent implements OnInit {
  flag1 = true;
  stage = 0;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.flag1 = !this.flag1;
}
}
