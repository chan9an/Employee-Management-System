import { Component } from '@angular/core';
import { ViewEmpService } from '../view-emp.service';

@Component({
  selector: 'app-update-emp',
  standalone: false,
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent {
constructor(private es:ViewEmpService){}
id: any;
  fname: string = '';
  lname: string = '';
  age: any;
  salary: any;

  updEmp() {
    alert('update called!');

    this.es.updEmp(this.id, this.fname, this.lname, this.age, this.salary).subscribe(() => {
      alert('Employee Updated Successfully!');
    });
}
}
