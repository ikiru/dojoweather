import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

// cities
import { BurbankComponent } from "./burbank/burbank.component";
import { ChicagoComponent } from "./chicago/chicago.component";
import { DallasComponent } from "./dallas/dallas.component";
import { DcComponent } from "./dc/dc.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";
import { SeattleComponent } from "./seattle/seattle.component";

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  { path: "burbank", component: BurbankComponent },
  { path: "chicago", component: ChicagoComponent },
  { path: "dallas", component: DallasComponent },
  { path: "dc", component: DcComponent },
  { path: "sanjose", component: SanjoseComponent },
  { path: "seattle", component: SeattleComponent }
];

export const routing = RouterModule.forRoot(routes);
