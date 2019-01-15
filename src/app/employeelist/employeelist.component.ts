import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {DataService} from '../data.service'

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers:[DataService]
})

export class EmployeelistComponent implements OnInit {
  employees: Employee[];
  selectedemployee:Employee;  
  toggleform:boolean=false;

  constructor(private dataService: DataService) {
  
  }
  getEmployeeList() {
    this.dataService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
        
      });
  }
  addEmployee(form){
    let newemployee: Employee ={
      employeename: form.value.employeename,
      salary:form.value.salary
      }
      this.dataService.createEmployee(newemployee)
      .subscribe(()=>{
        this.getEmployeeList();
        });
    }
    deleteEmp(id){
       this.dataService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployeeList();
      })
    }
    showeditform(employee){
      this.selectedemployee=employee;
      this.toggleform=!this.toggleform;
  }
  editEmployee(form){
    let newemployee: Employee ={
      _id:this.selectedemployee._id,
      employeename: form.value.employeename,
      salary:form.value.salary
      }   
      this.dataService.updateEmployee(newemployee)
      .subscribe(()=>{
        this.getEmployeeList();
        this.toggleform=!this.toggleform;
      })
  }

  ngOnInit() {
  this.getEmployeeList();
  }

}