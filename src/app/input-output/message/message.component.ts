import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
@Input() message = 'this is child message';
@Input() description = 'this is child desc';
@Output() clickOk = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
