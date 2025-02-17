import { Component } from '@angular/core';
import { ViewEmpService } from '../view-emp.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-emp',
  standalone: false,
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent {
constructor(private es:ViewEmpService ,private route:ActivatedRoute){}
id: any;
  fname: string = '';
  lname: string = '';
  age: any;
  salary: any;

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      
      this.es.getEmployeeById(this.id).subscribe((employee: any) => {
        this.fname = employee.fname;
        this.lname = employee.lname;
        this.age = employee.age;
        this.salary = employee.salary;
      });
    }
  }

  updEmp() {

    this.es.updEmp(this.id, this.fname, this.lname, this.age, this.salary).subscribe(() => {
      alert('Employee Updated Successfully!');
    });
}
}
