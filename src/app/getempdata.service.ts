import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetempdataService {

  base_url:string='http://localhost:8080/API/getEmployee.php';
  base_url_insert:string='http://localhost:8080/API/insertEmployee.php';
  base_url_delete:string='http://localhost:8080/API/deleteEmployee.php';
  base_url_update:string='http://localhost:8080/API/updateEmployee.php';
  constructor(private _http:HttpClient) { }
  getEmployee():Observable<any>{
    return this._http.get(this.base_url);  
  }
  
  insertEmployee(employee_insert:any):Observable<any>{
    return this._http.post(this.base_url_insert, employee_insert);  
  }
  deleteEmployee(empid:any):Observable<any>{
    console.log(empid);
    return this._http.get(`${this.base_url_delete}?id=${empid}`);  
  }
  updateEmployee(employee_insert:any):Observable<any>{
    return this._http.post(this.base_url_update, employee_insert);  
  }
}
