import { Component } from '@angular/core';
import { ViewEmpService } from '../view-emp.service';

@Component({
  selector: 'app-search-emp',
  standalone: false,
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {
  emp: any = null; // Initialize as null to handle empty state

  constructor(private es: ViewEmpService) {}

  getEmp(eid: any) {
    this.es.getEmp(eid.value.id).subscribe((res: any) => {
      this.emp = res; // Set to null if no employee is found
    });
  }

  delete(e:any){
    this.es.deleteEmp(e).subscribe(()=>{})
  }
}
