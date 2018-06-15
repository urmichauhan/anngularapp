import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, ViewContainerRef} from "@angular/core";
import { HttpserviceService } from 'src/app/httpservice.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import { api } from "../../api";
import { objectdisplay } from "../pipe/objedisplay.pipe";

@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css'],
  providers: [ objectdisplay ]
})
export class SinglecountryComponent implements api,OnInit{
  public showr:boolean;public cntrdet:boolean;
  public arrayname:any=[];
  public errormsg:boolean;
  public finalarray:any=[];
  public show:boolean = false;
  public ctrdetails:any=[];
  public ctrdata;
    constructor(public _route:ActivatedRoute,public router:Router,public httpservice:HttpserviceService,private location:Location,
    private toastr:ToastrService, vcr: ViewContainerRef) {
      console.log("Single constructor is called"); 
      console.log(vcr);
    }
    public goback():any {
      //window.history.back();
      this.location.back();
      console.log("Back");
      this.toastr.success("Back");
    } 
  
    public getallregions():any {
      this.httpservice = this.httpservice.getallregions().subscribe(
          data =>{
            this.toastr.info("Single Countries-3 view​  displaying.");
              console.log(data);
              this.ctrdata = data;
              for(let i of data){
                 console.log(i.region);
                 this.arrayname.push(i.region);   
              }
              console.log(this.arrayname);    
                
                function removeDuplicateregion(arr){
                  let rarr = arr.filter(function(elem, index, self) {
                      return index == self.indexOf(elem);
                  });
                  return rarr;
                }
                this.finalarray= removeDuplicateregion(this.arrayname);
                console.log(this.finalarray);
                
                }, 
          error => {
              this.errormsg = true;
              console.log(this.errormsg);
              console.log("some error occured");
              console.log(error.errorMessage);
          }
      )
      
  }//end method
  public r;
    
    public showdetails(iname)  {
      this.show = !this.show;
      //console.log(iname);
      console.log(this.ctrdata);
      for(let k of this.ctrdata)
      {
          console.log(k.name);
              console.log(k.name);
              if(iname == k.region)
              {
                  this.r=k.region;
                  console.log(k.region);
                  this.ctrdetails.push(k.name);
                  console.log(this.ctrdetails);
              } 
      }
      console.log(this.ctrdetails);
      //this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    }
  public mydata:any;

    public getcountries():any {
      this.showr = !this.showr;
      this.toastr.show("Select Region and Contry.");
    }
    public getcountriesdetails(cname):any {
      this.cntrdet = !this.cntrdet;
      this.toastr.show("See Single countries all details.");
      console.log(this.ctrdata);
      for(let k of this.ctrdata)
      {
          console.log(k.name);
            
              if(cname == k.name)
              {
                this.mydata=k;
                console.log(this.mydata);
                  console.log(k.cioc);
                  console.log(k.currencies);
                  for(let ck of k.currencies){
                    console.log(ck.code);
                  }
              } 
      }
    }

    ngOnInit(){
      this.getallregions();
    }
}
