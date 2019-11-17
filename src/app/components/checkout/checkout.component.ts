import { Component, OnInit } from '@angular/core';


import { BookInterface } from '../../models/book-interface'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public router:Router, 
    public location:Location,
    public _uw:UserWService,
    private dataApi:DataApiService
  	) { }
    public book:BookInterface;
  
  public sendBook(){
     this.dataApi.saveBook(this._uw.book).subscribe();
    this.dataApi.senMailNewBookAppToUser(this._uw.book).subscribe(); 
    this.dataApi.senMailNewBookAppToAdmin(this._uw.book).subscribe();
    this.router.navigate(['/successbook'])	    
    }
  
  ngOnInit() {	
  }
  
}
