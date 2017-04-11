import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Cars } from "../interfaces/Cars";
import { Riders } from "../interfaces/Riders";
import { Direction } from "../interfaces/Direction";
import {Realization} from "../interfaces/Realization";

@Injectable()
export class HttpService {

  constructor(private http: Http){
  }

  
  getCars() : Observable<Cars[]> {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append('Content-Type','application/json;charset=utf-8');

    //noinspection TypeScriptValidateTypes
    return this.http.get('http://localhost:8000/api/cars/',{headers : headers})
        .map((item) => item.json());
  }

  getRiders() : Observable<Riders[]> {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append('Content-Type','application/json;charset=utf-8');

    //noinspection TypeScriptValidateTypes
    return this.http.get('http://localhost:8000/api/riders/',{headers : headers})
        .map((item) => item.json());
  }

  getDirections() : Observable<Direction[]> {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append('Content-Type','application/json;charset=utf-8');

    //noinspection TypeScriptValidateTypes
    return this.http.get('http://localhost:8000/api/directions/',{headers : headers})
        .map((item) => item.json());
  }

  getRealizations(direction: string,dateStart:string,dateEnd:string,tupeOfRealization:string) : Observable<Realization[]>{

    let headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append('Content-Type','application/json;charset=utf-8');

    let params: URLSearchParams = new URLSearchParams();
    params.set('Direction', direction);
    params.set('DateStart', dateStart);
    params.set('DateEnd', dateEnd);
    params.set('TypeOfRealization', tupeOfRealization);

    //noinspection TypeScriptValidateTypes
    return this.http.get('http://localhost:8000/api/realizations/',{headers : headers,params : params})
        .map((item) => item.json());
  }

  
  
  
  
  // getTestData() : Observable<any> {
  //   let headers = new Headers();
  //   headers.append("Access-Control-Allow-Headers", "Content-Type");
  //   headers.append('Content-Type','application/json;charset=utf-8');
  //
  //   //noinspection TypeScriptValidateTypes
  //   return this.http.get('http://localhost:8000/api/test/',{headers : headers});
  // }
  
}
