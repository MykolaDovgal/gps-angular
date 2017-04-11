import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../Services/data.service";

import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Observable} from "rxjs/Observable";
import {Riders} from "../../../../interfaces/Riders";
import {Cars} from "../../../../interfaces/Cars";
import {Direction} from "../../../../interfaces/Direction";
import {HttpService} from "../../../../Services/http.service";

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.css']
})
export class SelectBarComponent implements OnInit {

  private selectedParent: string = null;
  private minDate: Date;
  private maxDate: Date;
  private fromDate = new Date(Date.now());
  private toDate = new Date(Date.now());

  private ridersCtrl: FormControl;
  private filteredRiders: Observable<Riders[]>;

  private carsCtrl: FormControl;
  private filteredCars: Observable<Cars[]>;

  private regionCtrl: FormControl;
  private filteredRegions: Observable<string[]>;

  private directionCtrl: FormControl;
  private filteredDirections: Observable<Direction[]>;
  
  constructor(private dataServices: DataService,private httpService: HttpService) {
    this.directionCtrl = new FormControl();
    this.regionCtrl = new FormControl();
    this.ridersCtrl = new FormControl();
    this.carsCtrl = new FormControl();
    this.directionCtrl.disable();

  }




  filterName(val: string,arr: any[])  {
    return val ? arr.filter((s) => new RegExp(val, 'gi').test(s.Name)) : arr.slice();
  }

  filterDirectionName(val: string,arr: Direction[])  {
    if(this.selectedParent)
    {
      arr = arr.filter((s) => s.Parent == this.selectedParent);
      if(val)
      {
        arr = arr.filter((s) => new RegExp(val, 'gi').test(s.Name));
        return arr.slice();
      }
      return arr.slice();
    }
    return arr.slice();
  }

  filterRegion(val: string,arr: any[]) : Direction[]{
    let n = {},r=[];
    for(let i = 0; i < arr.length; i++)
    {
      if (!n[arr[i].Parent])
      {
        n[arr[i].Parent] = true;
        r.push(arr[i].Parent == "" ? "Без категорії" : arr[i].Parent);
      }
    }
    return val ? r.filter((s) => new RegExp(val, 'gi').test(s)) : r.slice();
  }

  displayFn(item){
    return item ? item.Name : item;
  }
  
  get cars()
  {
    return this.dataServices.getCars();
  }

  get riders()
  {
    return this.dataServices.getRiders();
  }
  get directions()
  {
    return this.dataServices.getDirections();
  }



  initDirectionsList()
  {
    this.filteredDirections != undefined ? this.filteredDirections : this.filteredDirections = this.directionCtrl.valueChanges
                                                                                              .startWith(null)
                                                                                              .map(name => this.filterDirectionName(name,this.directions));
  }


  initRegionsList()
  {
    this.filteredRegions != undefined ? this.filteredRegions : this.filteredRegions = this.regionCtrl.valueChanges
                                                                .startWith(null)
                                                                .map(name => this.filterRegion(name,this.directions));
  }

  initCarsList()
  {
    this.filteredCars ? this.filteredCars : this.filteredCars = this.carsCtrl.valueChanges
                                                                .startWith(null)
                                                                .map(name => this.filterName(name,this.cars));
  }

  initRidersList()
  {
    this.filteredRiders ? this.filteredRiders : this.filteredRiders = this.ridersCtrl.valueChanges
                                                                      .startWith(null)
                                                                      .map(name => this.filterName(name,this.riders));
  }





  setDateRange() {
    this.minDate = new Date(this.fromDate);
    this.maxDate = new Date(this.toDate);
    this.dataServices.selectedData.DateFrom = this.fromDate.toLocaleString('uk-UA');
    this.dataServices.selectedData.DateTo = this.toDate.toLocaleString('uk-UA');
  }


  private getRealizations()
  {
    // let direction = this.dataServices.selectedData.Direction.Guid;
    // let dateStart = this.getDate(this.dataServices.selectedData.DateFrom);
    // let dateEnd = this.getDate(this.dataServices.selectedData.DateTo);
    // console.log(direction);
    //   console.log(dateStart);
    //   console.log(dateEnd);
      let direction = '05525640-c552-11df-ac09-000c29cca277';
      let dateStart = '17.04.2017, 11:13:00';
      let dateEnd = '24.04.2017, 00:00:00';

    let typeOfRealization = '1';
    this.httpService.getRealizations(direction,dateStart,dateEnd,typeOfRealization).subscribe(
        item => {
          this.dataServices.setRealizations(item);
        });
  }

  private getDate(dateString) {
  let arr = dateString.split('/');
  return arr.length < 3 ? String(arr[2]) + arr[1] + arr[0] : String(arr[2]) + arr[1] + arr[0] + arr[3] + arr[4];
}

  private selectParent(parent: string) {
    this.selectedParent = parent;
    this.directionCtrl.enable();
  }

  private selectDirection(direction: Direction) {
    this.dataServices.selectedData.Direction = direction;
  }

  private selectCar(car: Cars) {
    this.dataServices.selectedData.Car = car;
  }

  private selectRider(rider: Riders) {
    this.dataServices.selectedData.Rider = rider;
  }
  
  ngOnInit() {
    
  }

}
