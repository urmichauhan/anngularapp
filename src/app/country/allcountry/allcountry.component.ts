import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, ViewContainerRef} from "@angular/core";
import { HttpserviceService } from 'src/app/httpservice.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import { api } from "../../api";

@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements api,OnInit{
  public showr:boolean;public cntrdet:boolean;
  public arrayname:any=[];
  public errormsg:boolean;
  public finalarray:any=[];
  public show:boolean = false;
  public ctrdetails:any=[];
  public ctrdata;
    constructor(public _route:ActivatedRoute,public router:Router,public httpservice:HttpserviceService,private location:Location,
    private toastr:ToastrService, vcr: ViewContainerRef) {
      console.log("All country constructor is called"); 
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
            this.toastr.info("All Countries-2 view​  displaying.");
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
  public r;public reg;  public n;public f;public cap;public tim;public curr;public subr;

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
      this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    }
    public gotosinglecon():any {
      this.router.navigate(['/singlecountry']);
    }
  
    public getcountries():any {
      this.showr = !this.showr;
      this.toastr.show("Select Region and Contry.");
    }
    public getcountriesdetails(cname):any {
      this.cntrdet = !this.cntrdet;
      this.toastr.show("Select Region and Contry.");
      console.log(this.ctrdata);
      for(let k of this.ctrdata)
      {
          console.log(k.name);
              console.log(k.name);
              if(cname == k.name)
              {
                  this.reg=k.region;
                  this.n = k.name;
                  this.cap = k.capital;
                  this.f=k.flag;
                  this.tim=k.timezones;
                  this.curr=k.currencies.name;
                  this.subr = k.subregion;
                  console.log(k.region);
              } 
      }
    }

    ngOnInit(){
      this.getallregions();
    }
}
