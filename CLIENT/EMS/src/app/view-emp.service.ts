import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ViewEmpService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9090/employees"
  url2="http://localhost:9090/delete"
  url3="http://localhost:9090/save"
  url4="http://localhost:9090/update"
  getEmployees(){
   return this.http.get(this.url1);
}
deleteEmp(id:any){
  alert(`Are you sure you want to delete ${id} Employee?`)
  return this.http.delete(this.url2+"/"+id);
}
addEmp(id:any,Firstname:any,lastname:any,age:any,salary:any,){
  alert(`Are You sure You want to add ${Firstname}${lastname} with ${id} and salary${salary}`) 
  let e ={
    id:id,
    fname:Firstname,
    lastname:lastname,
    age:age,
    salary:salary
  }
  return this.http.post(this.url3,e);
}
updEmp(id:any,Firstname:any,lastname:any,age:any,salary:any){
  alert(`Are You sure You want to Update ${Firstname}${lastname} with ${id} and salary${salary}`)
  let e={
    id:id,
    fname:Firstname,
    lastname:lastname,
    age:age,
    salary:salary
  }
  return this.http.post(this.url4,e);
}
}
