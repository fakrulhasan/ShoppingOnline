import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  @ViewChild('item',{static: false}) item:ElementRef;
  @ViewChild('price',{static: false}) price:ElementRef;
  @ViewChild('desc',{static: false}) desc:ElementRef;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {  
    //$('.btn').css("color","blue");
  }

prodetail:string;
getProduct(this:any){
  alert($(this).parent().parent().find('.title').text());
}
}
