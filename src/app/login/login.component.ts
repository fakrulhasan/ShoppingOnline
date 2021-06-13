import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validator, Validators, NgModel} from '@angular/forms';
import {ShowhidenavigationService} from '../showhidenavigation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _Show:ShowhidenavigationService) { }

  ngOnInit() {

  }
  loginuser(u){
    console.log(u);
  
   if(u.uname == "admin" && u.upass=="admin"){
    this.router.navigateByUrl('/home');
    this._Show.userLogin();
    this._Show.username = u.uname;
   }
  }
}
