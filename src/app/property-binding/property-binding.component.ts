import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  customId = 'my-custom-div-id';
  customClass = 'background-info';
  lost_message = 'Rahul Gandhi concedes defeat in Amethi, congratulates Smriti Irani';
  closeMsg = 'You can Close it ';
  show_msg = true;

  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    alert('Hello hi bye bye !!');
  }

  captureEvent(event) {
    if (event.altKey) {
      console.log(event);
    } else {
      console.log('Only works with alt');
    }
  }
  closeIt() {
    this.show_msg = false;
    console.log('message was deleteed !!');
  }
  undoMsg() {
    this.show_msg = true;
    console.log('message Undo !!');
  }

}
