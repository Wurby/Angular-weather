import { OpenWeatherService } from './open-weather.service';
import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ows: OpenWeatherService) {}
  weather$: Observable<any>;

  getWeather(): Observable<any> {
    return this.ows.getWeather();
  }

  ngOnInit(): void {
    this.weather$ = this.getWeather();
  }
}
