import { async } from '@angular/core/testing';
import { shareReplay } from 'rxjs/operators';
import { LocationService } from './location.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  weatherKey = '85875d330e36fcae0f5a1cd03b9b1fd7';
  ROOT_URL = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private http: HttpClient, private local: LocationService) {}

  getWeather(): Observable<any> {
    return from(this.local.getLocation()).pipe(
      switchMap((location) => {
        const options = {
          params: new HttpParams()
            .set('lat', `${location.coords.latitude}`)
            .set('lon', `${location.coords.longitude}`)
            .set('appid', this.weatherKey)
            .set('exclude', 'minutely,hourly,daily'),
          observe: 'body' as const,
          responseType: 'json' as const,
        };
        return this.http.get(this.ROOT_URL, options);
      })
    );
  }
}
