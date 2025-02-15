import { Component } from '@angular/core';
//import { ViewEmpComponent } from '../view-emp/view-emp.component';
import { ViewEmpService } from '../view-emp.service';

@Component({
  selector: 'app-add-emp',
  standalone: false,
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {

  constructor(private es: ViewEmpService) {} 

  id: any;
  fname: string = '';
  lname: string = '';
  age: any;
  salary: any;

  addemp() {
    this.es.addEmp(this.id, this.fname, this.lname, this.age, this.salary).subscribe(() => {
      alert('Employee Added Successfully!');
      this.resetForm(); 
    });
  }

  resetForm() {
    this.id = null;
    this.fname = '';
    this.lname = '';
    this.age = null;
    this.salary = null;
  }

}
