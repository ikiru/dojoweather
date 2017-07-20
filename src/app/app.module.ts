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

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
