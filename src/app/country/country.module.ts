import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpserviceService} from '../httpservice.service';
import { AllcountryComponent } from './allcountry/allcountry.component';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';
import {objectdisplay} from './pipe/objedisplay.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
     { path:'allcountry',component:AllcountryComponent, pathMatch: 'full' },
     {path:'singlecountry',component:SinglecountryComponent}
    ])
  ],
  providers:[HttpserviceService],
  declarations: [ AllcountryComponent, SinglecountryComponent,objectdisplay],
  exports:[
    AllcountryComponent,
    SinglecountryComponent,
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
