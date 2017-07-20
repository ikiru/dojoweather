import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class ApiService {
  constructor(private _http: Http) {}

  getCity(city: string) {
    console.log(city);
    if (city) {
      return this._http
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d60527eec0504803b6a98695127978f`
        )
        .map(data => data.json())
        .toPromise();
    }
  }
}
