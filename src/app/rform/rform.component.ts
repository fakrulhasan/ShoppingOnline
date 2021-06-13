import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  myReactiveForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myReactiveForm= new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Email': new FormControl(null, Validators.required),
      'Mobile': new FormControl(null, Validators.required),
      'Username': new FormControl(null, Validators.required),
      'Password': new FormControl(null, Validators.required),
    })
  }

}
