import { Component, OnInit } from '@angular/core';
import { ViewEmpService } from '../view-emp.service';
import { CommonModule } from '@angular/common';  
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-emp',
  standalone: true,
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css'],
  imports: [CommonModule,RouterModule],
  providers: [ViewEmpService]
})
export class ViewEmpComponent {

  constructor(private es:ViewEmpService){
    this.getAll();
  }
  emp:any;
  
  getAll(){
    this.es.getEmployees().subscribe((res:any)=>{this.emp=res})
  }
  delete(e:any){
    this.es.deleteEmp(e).subscribe(()=>
      {(this.getAll);
      }
      );
    }

}
