import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  firstClick() {
    return console.log("clicked");
  }

  getUsers() {
    return this.httpClient.get('https://reqres.in/api/users');
  }
}
