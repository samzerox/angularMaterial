import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  api:string;
  myData:Array<any>;

  constructor(private http:Http){
    this.api = "https://jsonplaceholder.typicode.com/photos";
      this.http.get(this.api)
            .map(response => response.json())
            .subscribe(res=> this.myData = res);
  }
}
