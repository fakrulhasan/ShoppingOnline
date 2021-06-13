import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { homedir } from 'os';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { RformComponent } from './rform/rform.component';
import { ProductsComponent} from './products/products.component';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import{EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'register', component:RegisterComponent},
  {path:'products', component:ProductsComponent},
  {path:'rform', component:RformComponent},
  {path:'details', component:ProductListDetailsComponent},
  {path:'employee',component:EmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
