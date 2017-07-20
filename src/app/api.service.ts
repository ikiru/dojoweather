import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class ApiService {
  constructor(private _http: Http) {}

  getCity(city: string) {
    if (city) {
      return this._http
        .get("http://api.openweathermap.org/data/2.5/weather?q=${city}")
        .map(data => data.json())
        .toPromise();
    }
  }
}
