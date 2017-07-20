import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiService {
  constructor(private _http: Http) {}
  retrieveCity(city) {
    if (city) {
      return this._http
        .get("api.openweathermap.org/data/2.5/weather?q={city}")
        .map(data => data.json())
        .toPromise();
    }
  }
}
