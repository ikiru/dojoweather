import { Routes, RouterModule } from "@angular/router";
import {LandingComponent: } from './lamding/landing.component';

const APP_ROUTES: Routes = [
  { path: '', compontenet: LandingCompenent , pathMatch:'full'  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
