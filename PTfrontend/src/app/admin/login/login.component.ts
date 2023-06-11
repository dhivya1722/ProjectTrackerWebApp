import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  user:User=new User()

  User= {email:"",password:""};
  submit=false;
  loading=false;
  errorMessage="";





  constructor(private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {

    this.auth.canShowLoginPage()
  }


   onSubmit(){
      console.log(this.user)
        this.auth.loginuser(this.user).subscribe((data)=>{
        // this.user = data
        alert("Login successfully");
        sessionStorage.setItem("token" , "logedIn");
        sessionStorage.setItem("role" , this.user.role)
        sessionStorage.setItem("userEmail" , this.user.email)
        this.auth.showDashboard()
      },error=>alert("Please enter correct email or password or role"));
  }


  
  }




  



