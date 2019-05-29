import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
logo = 'Navbar';
  constructor() {
    setTimeout(() => {
      this.logo = 'Angular Application';
  }, 2000);
   }

  ngOnInit() {
  }

}
