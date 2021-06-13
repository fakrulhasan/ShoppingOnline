import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myReactiveForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'userName': new FormControl(null),
      'mobile': new FormControl(null, [Validators.required]),
      'address': new FormControl(null),
      'pAddress': new FormControl(null),
      'nNumber': new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.myReactiveForm);
  }
}
