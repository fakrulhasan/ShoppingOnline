import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ServceAddtocartService } from '../servce-addtocart.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  @ViewChild('item',{static: false}) item:ElementRef;
  @ViewChild('title',{static: false}) title:ElementRef;
  @ViewChild('price',{static: false}) price:ElementRef;
  @ViewChild('desc',{static: false}) desc:ElementRef;
  constructor(private renderer:Renderer2, private _sevice:ServceAddtocartService) { }

  ngOnInit() {  
    //$('.btn').css("color","blue");
  }
  getProduct(val){
    console.log(val)
    console.log()
    this._sevice.storeDatafromchild.push({
     title:this.title.nativeElement.innerHTML,
     price:this.price.nativeElement.innerHTML,
     qty:this.item.nativeElement.value
    })
    console.log(this._sevice.storeDatafromchild);
  }


}
