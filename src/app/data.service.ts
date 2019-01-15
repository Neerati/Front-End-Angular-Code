import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.uri}/employees`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/employees/${id}`);
  }

  createEmployee(newemployee) {
    let employee = {
      employeename:newemployee.employeename,
      salary:newemployee.salary
    };
    return this.http.post(`${this.uri}/employees/`, employee);
  }

  
   updateEmployee(newemployee) {
      return this.http.put(`${this.uri}/employees/${newemployee._id}`, newemployee);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.uri}/employees/${id}`);
  }
}