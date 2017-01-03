import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


import {HomeComponent} from './home/home.component';
import {LeaderboadsComponent} from './leaderboads/leaderboads.component';
import { ForumsComponent } from './forums/forums.component';
import { SupportComponent } from './support/support.component';
import { EStoreComponent } from './e-store/e-store.component';


export const router: Routes = [


  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'leaderboards', component: LeaderboadsComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'support', component: SupportComponent},
  {path: 'e-store', component: EStoreComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
