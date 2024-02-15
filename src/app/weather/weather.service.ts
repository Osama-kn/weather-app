import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '667daaa6b8ce9e0e88d6274fda9ffdcb';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  http = inject(HttpClient);


  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }
}
