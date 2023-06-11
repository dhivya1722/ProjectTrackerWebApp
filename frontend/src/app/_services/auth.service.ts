import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from '../user';
import { SignupData } from '../signup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 

  
 // private localHost = "http://localhost:8084"
  

  // private baseurl="http://localhost:8084/user/loginuser"
  private loginAPIPath="http://localhost:8084/user/loginuser"
  private signUpAPIPath="http://localhost:8084/user/signup"
  private getAllUsersAPIPath="http://localhost:8084/user/getallusers"

  constructor(private router:Router,private httpClient:HttpClient) { }


  isauthenticated():boolean{
    if (sessionStorage.getItem('token')!==null){
    return true;
  }
  return false;
}


canaccess(role: string):boolean{
  if (!this.isauthenticated()) {
      //redirect to login
      this.router.navigate(['/login']);
      return false
  }else if (role != sessionStorage.getItem('role')){
    return false
  }
  return true
}

canAccessAdminPage() : boolean{
  return this.canaccess('Admin')
}

canAccessUserPage() : boolean{
  return this.canaccess('User')
}

isAdmin() : boolean{
  if (sessionStorage.getItem('role')=="Admin"){
    return true;
  }
  return false;
}


canShowLoginPage(){
  if (this.isauthenticated()) {
      //redirect to dashboard

      this.showDashboard()
  }
}

showDashboard(){
  if (this.isAdmin()){
    this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/userdashboard']);
    }
}

showProjectList(){
  if (this.isAdmin()){
    this.router.navigate(['/projectlist']);
    }else {
      this.router.navigate(['/userprojectlist']);
    }
}

 loginuser(user:User):Observable<object>{
  
  console.log("Login Api call triggered");

  let params = new HttpParams();

  // Begin assigning parameters
  params = params.append('email', user.email);
  params = params.append('password', user.password);
  params = params.append('role', user.role);
  //return this.httpClient.get(`${this.baseurl}`)
 return this.httpClient.get(`${this.loginAPIPath}`,{ params: params})
  }

/*
getloginUser(email:string,password:string){
  return this.httpClient.get('http://localhost:8084/user/isuseravailable');
}*/

signupuser(signupdata:SignupData):Observable<object>{


  console.log("signup api called")
  let params = new HttpParams();
  //let command: HttpParams = new HttpParams();
  params = params.append('email', signupdata.email);
  params = params.append('password', signupdata.password);
  params = params.append('name', signupdata.name);
  params = params.append('role', signupdata.role);
  
  //command = command.append('params', params.toString());
  
  return this.httpClient.post(`${this.signUpAPIPath}`,null,{params:params});
  //return this.httpClient.post(`${this.baseurl1}`,signupdata);

 
}
  

getAllUsers(signupdata:SignupData):Observable<object>{
  let params = new HttpParams();

  return this.httpClient.get(`${this.getAllUsersAPIPath}`);
 //return this.httpClient.get(`${this.baseurl1}`+'/email');

}


removeToken(){
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('role')
  sessionStorage.removeItem('userEmail')
}

logOut(){
  this.removeToken()
  this.router.navigate(['/login']);
}


}
