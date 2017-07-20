// Modules

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

// Component
import { AppComponent } from "./app.component";

// Services
import { HttpService } from "./http.service";
import { ApiService } from "./api.service";
import { LandingComponent } from './landing/landing.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, SeattleComponent, SanjoseComponent, BurbankComponent, DallasComponent, DcComponent, ChicagoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
