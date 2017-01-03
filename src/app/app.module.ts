import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from './app.router';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';

//Materialize Library
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LeaderboadsComponent } from './leaderboads/leaderboads.component';
import { ForumsComponent } from './forums/forums.component';
import { SupportComponent } from './support/support.component';
import { EStoreComponent } from './e-store/e-store.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    LeaderboadsComponent,
    ForumsComponent,
    SupportComponent,
    EStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
