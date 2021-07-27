import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getWeather(location : any)
  {
    return this.http.get('http://api.weatherstack.com/current?access_key=425e000af642d1aa66286adb6b7c816b&query='+ location);
  }
}
