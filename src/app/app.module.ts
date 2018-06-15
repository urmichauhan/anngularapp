import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ViewContainerRef } from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import {HttpserviceService} from './httpservice.service';

import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {CountryModule} from './country/country.module';
import { AllregionsComponent } from './allregions/allregions.component';
import { FiltersModule } from './filters/filters.module';

@NgModule({
  declarations: [
    AppComponent,
    AllregionsComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    CountryModule,
    FiltersModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'allregions',component:AllregionsComponent},
     ])
  ],
  exports:[
    RouterModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})

export class AppModule{ }
