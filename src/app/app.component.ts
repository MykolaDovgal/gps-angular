import { Component,OnInit } from '@angular/core';
import {HttpService} from "./Services/http.service";
import {DataService} from "./Services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpService: HttpService,private dataService: DataService){

  }

  ngOnInit(){
      this.httpService.getCars().subscribe(
        item => {
          this.dataService.setCars(item);
        });

      this.httpService.getRiders().subscribe(
        item => {
            this.dataService.setRiders(item);
        });
      this.httpService.getDirections().subscribe(
          item => {
              this.dataService.setDirections(item);
              //console.log(this.dataService.getDirections());
          });
  }
 
}
