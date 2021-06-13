import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product4',
  templateUrl: './product4.component.html',
  styleUrls: ['./product4.component.css']
})
export class Product4Component implements OnInit {
  @ViewChild('item',{static: false}) item:ElementRef;
  @ViewChild('price',{static: false}) price:ElementRef;
  @ViewChild('desc',{static: false}) desc:ElementRef;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {  
    //$('.btn').css("color","blue");
  }

prodetail:string;
getProduct(this){
  alert($(this).parent().parent().find('.title').text());
}

}
