import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
mytext:string = "Parent Componet Work";
proHeading:string = "World Class Products";
imgurl=["assets/images/pepper.jpg", "assets/images/jars.jpg", "assets/images/pot.jpg", "assets/images/teapot.jpg"];
}
