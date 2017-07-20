import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../api.service";

@Component({
  selector: "app-burbank",
  templateUrl: "./burbank.component.html",
  styleUrls: ["./burbank.component.css"]
})
export class BurbankComponent implements OnInit {
  weather;
  temp;
  maxtemp;
  mintemp;
  humidity;
  wind;
  clouds;
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.weather = this._apiService.getCity("burbank").then(weather => {
      console.log(weather);
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.maxtemp = weather.main.temp_max;
      this.maxtemp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.mintemp = weather.main.temp_min;
      this.mintemp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.clouds = weather.weather.description;
    });
  }
}
