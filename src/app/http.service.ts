import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class HttpService {
  constructor(private _http: Http) {}
  retrieveWeather() {
    return this._http.get("/").map(data => data.json()).toPromise();
  }
}
