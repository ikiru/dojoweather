import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  city = [];
  constructor(private _httpService: HttpService) {}
  getCity() {
    this._httpService
      .retrieveCity()
      .then(city => [(this.city = city)])
      .catch(err => {
        console.log(err);
      });
  }
}
