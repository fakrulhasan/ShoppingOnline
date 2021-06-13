import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServceAddtocartService } from '../servce-addtocart.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.css']
})
export class ProductListDetailsComponent implements OnInit {
showProductList:any;
user:any;
  constructor(private _getdata:ServceAddtocartService, private router:Router) { }
  recvdata=[];
  ngOnInit() {
    this.recvdata = this._getdata.storeDatafromchild;
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
