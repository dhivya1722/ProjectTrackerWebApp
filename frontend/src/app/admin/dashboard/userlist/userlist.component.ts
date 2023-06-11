import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/project';
import { SignupData } from 'src/app/signup-data';
import { User } from 'src/app/user';
import { Userlist } from 'src/app/userlist';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  signupdata:SignupData=new SignupData()
  project:Project=new Project()
 
  usersList: any;



  constructor(private auth:AuthService,private projectservice:ProjectService,private router : Router){}

  openUserDetailPage(signupdata:SignupData){
    console.log(signupdata);
    const userEmail = signupdata.email
    const userName = signupdata.name
    this.router.navigate(['/displayuserlist' , userEmail])
  }
 
  


  ngOnInit(): void {

    this.auth.getAllUsers(new SignupData).subscribe((data:any)=>{
      console.log(data)
      this.usersList=data;

    }
    )
  }
}
