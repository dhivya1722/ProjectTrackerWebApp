import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule, MatEndDate, MatStartDate} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';


import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UserlistComponent } from './admin/dashboard/userlist/userlist.component';
import { AddProjectsComponent } from './admin/dashboard/add-projects/add-projects.component';
import { ProjectListComponent } from './admin/dashboard/project-list/project-list.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { HomeComponent } from './admin/home/home.component';
import { RegisterComponent } from './admin/register/register.component';
import { DisplayProjectlistComponent } from './admin/dashboard/project-list/display-projectlist/display-projectlist.component';
import { DisplayUserlistComponent } from './admin/dashboard/userlist/display-userlist/display-userlist.component';
import { UserdashboardComponent } from './admin/userdashboard/userdashboard.component';
import { UserprojectlistComponent } from './admin/userdashboard/userprojectlist/userprojectlist.component';









const routes:Routes = [
  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'projectlist',component:ProjectListComponent},
  {path:'addprojects',component:AddProjectsComponent},
  {path:'displayprojectlist/:projectName',component:DisplayProjectlistComponent},
  {path:'displayuserlist/:userEmail',component:DisplayUserlistComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'userprojectlist',component:UserprojectlistComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    UserlistComponent,
    AddProjectsComponent,
    ProjectListComponent,
    DisplayProjectlistComponent,
    DisplayUserlistComponent,
    UserdashboardComponent,
    UserprojectlistComponent,
 
   
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [

    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
   

   
   
  
   

  ],


  
  providers: [ 
],
  bootstrap: [AppComponent]
})
export class AppModule {
}