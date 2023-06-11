import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { User } from '../user';
import { Observable } from 'rxjs';
import { SignupData } from '../signup-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  private getAllProjectForUserAPIPath="http://localhost:8084/user/getprojectforuser"
 private getAllUsersAPIPath="http://localhost:8084/user/getallusers"
  private addProjectAPIPath="http://localhost:8084/user/addproject"
  private getAllProjectAPIPath="http://localhost:8084/user/getallproject"
  http: any;
  constructor(private router:Router,private httpClient:HttpClient) { }






  addproject(project:Project){

    let params = new HttpParams();
  //let command: HttpParams = new HttpParams();
  console.log(project.users)
  params = params.append('projectname',project.projectname);
  params = params.append('users', project.users.join(','));
  params = params.append('startdate',project.startdate)
  params = params.append('enddate',project.enddate);



    return this.httpClient.post(`${this.addProjectAPIPath}`,null,{ params: params})

  }



  getAllProject(project:Project):Observable<object>{

    let params = new HttpParams();

   

    return this.httpClient.get(`${this.getAllProjectAPIPath}`);


  }


  getProjectForUser(userEmail:string):Observable<object>{

    let params = new HttpParams();

    params = params.append('useremail' , userEmail)

    return this.httpClient.get(`${this.getAllProjectForUserAPIPath}` ,{params});


  }




  getAllUserList(signupdata:SignupData):Observable<object>{

    // let params = new HttpParams()

 
     
    return this.httpClient.get(`${this.getAllUsersAPIPath}`);


  }

  





}
