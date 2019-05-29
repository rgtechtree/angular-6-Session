import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  status = 'Election Tweets';
  description = 'Please wait....';
  constructor() {
    setTimeout(() => {
      this.status = 'Congratulations to Prime Minister Shr.Narendra Modi ji and his BJP party on their BIG election victory! ';
      this.description = '23 June 2019';
    }, 5000);
  }

  ngOnInit() {
  }
  seeResult(msg) {
    alert( msg);
  }
}
