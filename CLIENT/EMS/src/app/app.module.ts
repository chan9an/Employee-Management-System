import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewEmpComponent } from './view-emp/view-emp.component'; // Import ViewEmpComponent here
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchEmpComponent,
    AddEmpComponent,
    UpdateEmpComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ViewEmpComponent,
    FormsModule , 
    RouterModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
