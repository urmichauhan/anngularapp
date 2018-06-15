import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public baseurl = "https://restcountries.eu/rest/v2";
  public regionarray:any=[];

  constructor(private _http:HttpClient) {
    console.log("http-service called");
  }
  public handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

   public getallregions():any {
    let resp = this._http.get(this.baseurl+'/all?region');
    console.log(resp);
    return resp;
  } 

  public getcurrency():any {
    let resp = this._http.get(this.baseurl+'/all?currency');
    console.log(resp);
    return resp;
  }

  public getlanguages():any {
    let resp = this._http.get(this.baseurl+'/all?lang');
    console.log(resp);
    return resp;
  }
}
