import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language/language.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpserviceService} from '../httpservice.service';
import {objoffilter} from './pipe/objoffilter.pipe';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path:'currency',component:CurrencyComponent, pathMatch: 'full' },
     {path:'language',component:LanguageComponent}
    ])
  ],
  providers:[HttpserviceService],
  declarations: [ LanguageComponent,objoffilter,CurrencyComponent],
  exports:[
   LanguageComponent,
    CommonModule,
    FormsModule
  ]
})
export class FiltersModule { }
