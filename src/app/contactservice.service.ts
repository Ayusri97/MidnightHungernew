import { Injectable } from '@angular/core';
import { Contact } from './ContactClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private objContact: Contact;

  constructor(private _http: HttpClient) { }
  createConData(objContact: Contact) {
    return this._http.post(this.baseUri + '/create2', objContact, { headers: this.headers })
  }

}
