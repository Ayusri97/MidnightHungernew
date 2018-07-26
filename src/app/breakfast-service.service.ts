import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Breakfast} from './BreakfastClass';

@Injectable({
  providedIn: 'root'
})
export class BreakfastServiceService {

  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private brkfstObj: Breakfast;

  constructor(private _http: HttpClient) { }
  createBrkfstData(brkfstObj: Breakfast) {
    return this._http.post(this.baseUri + '/createBrkfst', brkfstObj, { headers: this.headers })
  }
  GetBrkfstData(){
    return this._http.get(this.baseUri + '/readBrkfst', { headers: this.headers })
    
  }
  GetBrkFastByCat1(){
    return this._http.get(this.baseUri + '/GetDataByid1', { headers: this.headers })
    
  }
  GetBrkFastByCat2(){
    return this._http.get(this.baseUri + '/GetDataByid2', { headers: this.headers })
    
  }
  GetBrkFastByCat3(){
    return this._http.get(this.baseUri + '/GetDataByid3', { headers: this.headers })
    
  }
  GetBrkFastByCat4(){
    return this._http.get(this.baseUri + '/GetDataByid4', { headers: this.headers })
    
  }

}
