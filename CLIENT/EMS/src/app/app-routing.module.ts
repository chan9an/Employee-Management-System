import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },  // Default route
  { path: 'all', component: ViewEmpComponent },
  { path: 'search', component: SearchEmpComponent },
  { path: 'insert', component: AddEmpComponent },
  { path: 'update', component: UpdateEmpComponent },
  { path: 'delete', component: DeleteEmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
