import { Component, OnInit} from '@angular/core';
import {ShowhidenavigationService} from '../showhidenavigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _Show:ShowhidenavigationService) {this._Show.userLogin();}

  ngOnInit() {
    //this._Show.userLogin();
  }

}
