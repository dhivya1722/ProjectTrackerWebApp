import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { SignupData } from 'src/app/signup-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupdata:SignupData=new SignupData()

  SignupData = {email:"",password:"",name:""};
  submit=false;
  loading=false;
  errorMessage="";
  


  constructor(private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {}


onSubmit(){
  console.log(this.signupdata)
    this.auth.signupuser(this.signupdata).subscribe(()=>{
    alert("Registered successfully");
    this.router.navigate(['/login']);
  },error=>alert("Existing email or password"));
}

}