import { Component, OnInit } from '@angular/core';
import{ GetempdataService}from '../getempdata.service';
import { Iemployee } from '../iemployee';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  btntxt="Register";
  employees:Iemployee={
  id:null,
  name:"abc",
  salary:null,
  dept:"",
  gender:""
}
  constructor(private _getemp:GetempdataService) { }
  emp=[];
 
  ngOnInit() {
    this.getdataEmp();
    this.resetForm();
  }
  // Load Employee Method
  public getdataEmp(){
    this._getemp.getEmployee().subscribe(productdata => this.emp = productdata);
  }

// Add Employee Method 
public addEmployee(employees){
  if(this.btntxt=="Register"){
    console.log(employees);
    console.log('resg');
    this._getemp.insertEmployee(JSON.stringify(employees)).subscribe((res)=>{
      
    });
    this.resetForm();
    this.getdataEmp();
  }else if(this.btntxt=="Update"){
    console.log('up');
    this.updateEmp(employees)
  }
  }
// End Add Employee Method 

updateEmp(employees){
  console.log('up2');
  this._getemp.updateEmployee(JSON.stringify(employees)).subscribe((res)=>{
      console.log(res);
  });
}

// Delete Employee Method 
 DeleteRecord(id){
  this._getemp.deleteEmployee(id).subscribe((res)=>{
  });
  this.getdataEmp();
}

// edit Employee Method 
 resetForm(){
   this.btntxt="Register";
  this.employees={
    id:null,
    name:"",
    salary:null,
    dept:"",
    gender:""
  }
}
 updateRecord(em){
  console.log(em);
  this.btntxt="Update";
  this.employees={
    id:em.empid,
    name:em.name,
    salary:em.salary,
    dept:em.dept,
    gender:em.gender
  }
}

}
