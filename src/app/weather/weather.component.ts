import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm! : FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder : FormBuilder,
    private ApiuxService : ApiserviceService   
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location : ['']
    });
  }
  sendToAPIXU(formValues: { location: string; }) {
    this.ApiuxService.getWeather(formValues.location).
    subscribe( data =>  this.weatherData = data)
      console.log(this.weatherData);
  }
}
