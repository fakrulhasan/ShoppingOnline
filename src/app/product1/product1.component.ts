import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import { ServceAddtocartService } from '../servce-addtocart.service';


@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  
  @ViewChild('item',{static: false}) item:ElementRef;
  @ViewChild('title',{static: false}) title:ElementRef;
  @ViewChild('price',{static: false}) price:ElementRef;
  @ViewChild('desc',{static: false}) desc:ElementRef;
  constructor(private renderer:Renderer2, private _sevice:ServceAddtocartService) { }

  ngOnInit() {  }
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
