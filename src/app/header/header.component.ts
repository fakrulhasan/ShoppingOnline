import { Component, OnInit, OnChanges,DoCheck} from '@angular/core';
import { ServceAddtocartService } from '../servce-addtocart.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {ShowhidenavigationService} from '../showhidenavigation.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _getdata:ServceAddtocartService, private router:Router, private _Show:ShowhidenavigationService) {
    
   }
  ulogin:boolean;
  userlogin:any;
  recvdata=[];
  ngOnInit() {
    this.recvdata = this._getdata.storeDatafromchild;
   // this.ulogin = this._Show.isUserLogin;
  }
  OnChanges(){
    var proList = this.recvdata.length+=this.recvdata.length;
  }
  showProductList(){
    this.router.navigate(['details']);
  }
  ngDoCheck(){
    this.ulogin = this._Show.isUserLogin;
    this.userlogin = this._Show.username;
  }
  

    


}
