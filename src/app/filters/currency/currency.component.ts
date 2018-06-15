import { Component, OnInit, ViewContainerRef} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpserviceService } from 'src/app/httpservice.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import { api } from "../../api";
import { objoffilter } from "../pipe/objoffilter.pipe";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [ objoffilter ]
})
export class CurrencyComponent implements OnInit {

  public showr:boolean;public cntrdet:boolean;
  public arrayname:any=[];
  public errormsg:boolean;
  public finalarray:any=[];
  public show:boolean = false;
  public ctrdetails:any=[];
  public ctrdata;
    constructor(public _route:ActivatedRoute,public router:Router,public httpservice:HttpserviceService,private location:Location,
    private toastr:ToastrService, vcr: ViewContainerRef) {
      console.log("Currency constructor is called"); 
      console.log(vcr);
    }
    public goback():any {
      //window.history.back();
      this.location.back();
      console.log("Back");
      this.toastr.success("Back");
    } 
  
    public getcurrency():any {
      this.httpservice = this.httpservice.getcurrency().subscribe(
          data =>{
            this.toastr.success("Currencies Filter-4 view​  displaying.");
              console.log(data);
              this.ctrdata = data;
              for(let i of data){
                 console.log(i.currencies); 
                  for(let ic of i.currencies)
                  {
                    this.arrayname.push(ic.code);
                  }
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
          console.log(k.currencies.code);
          for(let kc of k.currencies)
          {
            if(iname == kc.code)
            {
                this.r=kc.code;
                console.log(kc.code);
                this.ctrdetails.push(k.name);
                //console.log(this.ctrdetails);
            }  
          }
      }
      console.log(this.ctrdetails);
      //this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    }
  public mydata:any;

  public golan():any {
    this.router.navigate(['/language']);
  }

    public getcurren():any {
      this.showr = !this.showr;
      this.toastr.show("Select Currency and Contry.");
    }

    
    public getcountriesdetails(cname):any {
      this.cntrdet = !this.cntrdet;
      this.toastr.show("See Single countries all details.");
      console.log(this.ctrdata);
      for(let cd of this.ctrdata)
      {
           console.log(cd.name);
              if(cname == cd.name)
              {
                  this.mydata=cd;
                  console.log(this.mydata);
                  console.log(cd.cioc);
                  console.log(cd.currencies);
                  for(let ck of cd.currencies){
                    console.log(ck.code);
                  }
              }
      }
    }

    ngOnInit(){
      this.getcurrency();
    }
}
