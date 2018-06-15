import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {api} from './api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Location]
})
export class AppComponent implements api{ 
  title = 'Rest Countries';
  public allregions = "/allregions";
  public filters="/filters/currency";
  
  constructor(public _route:ActivatedRoute,public router:Router,private location:Location,public toastr:ToastrService) {
    console.log("constructor is called");
    
}
   
    public goback() {
      //window.history.back();
      this.location.back();
      console.log("Back");
      this.toastr.info("Back");
    }   
    public gofilter() {
      this.router.navigate(['/currency']);
    }
  
}
