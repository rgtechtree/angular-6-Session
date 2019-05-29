import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data-server',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.scss']
})
export class DataServerComponent implements OnInit {
  apiPath = "https://jsonplaceholder.typicode.com/users";
  userData;
  
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
   
  }

  sendData(data) {
    this.dataService.sendingDataToOtherComponent(data);
  }

  getDataFromServer(){
    this.http.get(this.apiPath).subscribe(
      (res) => {
        console.log(res);
        this.sendData(res);
        this.userData = res;
      }
    )
  }
}
