import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

// cities
import { burbank} from './burbank/burbank.component';
import { chicago} from './chicago/chicago.component';
import { dallas} from './dallas/dallas.component';
import {dc } from './dc/dc.component';
import {sanjose}from './sanjose/sanjose.component';
import { seattle}from'./seattle/seattle.component';


const routes:  Routes = [
  { path: "/", component: LandingComponent, pathMatch: "full" }
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DcComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'seattle', component: SeattleComponent },

];
