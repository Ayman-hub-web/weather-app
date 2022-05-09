import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
weatherData:any;
city:string = 'London';
  constructor(private weather:WeatherService){}
  ngOnInit(): void {
    this.send();
  }
  getweatherData(cityName:string){
    this.weather.getWeather(cityName).subscribe({
      next: (response =>{
        console.log(response);
        this.weatherData = response;
      })
    })
  }
  send(){
    this.getweatherData(this.city)
    console.log(this.city);
  }
}
