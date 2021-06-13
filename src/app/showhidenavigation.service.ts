import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowhidenavigationService {
isUserLogin:boolean=false;
  constructor() { }
  username:string="";
  userLogin(){
    this.isUserLogin = true;
  }
  
}
