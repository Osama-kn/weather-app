import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  WeatherService = inject(WeatherService);

  ngOnInit(): void {
    this.getWeather('London');
  }

  getWeather(city: string): void {
    this.WeatherService.getWeather(city).subscribe(
      (data) => (this.weatherData = data),
      (error) => console.error(error)
    );
  }
}
