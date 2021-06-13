import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { EngageComponent } from './engage/engage.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SuperiorComponent } from './superior/superior.component';
import { ProductComponent } from './product/product.component';
import { FindusComponent } from './findus/findus.component';
import { RegisterComponent } from './register/register.component';
// import {ReactiveFormsModule} from '@angular/forms';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { ServceAddtocartService } from './servce-addtocart.service';
import { RformComponent } from './rform/rform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import {ShowhidenavigationService} from'./showhidenavigation.service';
import{GetempdataService}from'./getempdata.service';
import { EmployeeComponent } from './employee/employee.component';
import{HttpClientModule} from'@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    EngageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SuperiorComponent,
    ProductComponent,
    FindusComponent,
    RegisterComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    RformComponent,
    ChildCompComponent,
    ParentCompComponent,
    ProductListDetailsComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ServceAddtocartService,ShowhidenavigationService,GetempdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
