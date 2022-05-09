import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
		'X-RapidAPI-Key': '70dab5434cmsh5037110abb538fdp121173jsn9a3041705652'
	}
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

url:string = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
  constructor(private http:HttpClient) { }

  getWeather(cityName:string):Observable<any>{
    return this.http.get<any>(environment.WeatherBaseApi, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'imperial')
      .set('mode', 'json')
    });
  }
  // getWeather():Observable<any>{
  //   return this.http.get<any>('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5',options)
  // }
}
