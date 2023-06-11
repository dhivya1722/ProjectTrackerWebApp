import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Project } from 'src/app/project';
import { SignupData } from 'src/app/signup-data';
import { ProjectService} from 'src/app/_services/project.service';
import * as moment from 'moment';
import { DateRange } from '@angular/material/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
import { Userlist } from 'src/app/userlist';
import { User } from 'src/app/user';




@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit{

 


  userList: User[] = [new User()];
  

  userListUpdated(e: { target: any; }){
    console.log(e.target.value)
  }
  dateChanged(e: { target: any; }){ 
    
    var dateTime = moment('startdate').format('YYYY-MM-DD');
    console.log(e.target.dateTime);
   
    //console.log(e.target.value)
  }



  selectedUsersEmail:[string] = [""]

  project:Project=new Project()

  Project= {projectname:"",startdate:"",enddate:""};
  submit=false;
  loading=false;
  errorMessage="";

  constructor(private auth:AuthService,private projectservice:ProjectService){

  }




  ngOnInit(): void {

    this.auth.getAllUsers(new SignupData).subscribe((data:any)=>{
      console.log(data)
      this.userList=data;

    }
    )
   
  }


  onSubmit(){
    
    // console.log(this.project)
    console.log(this.selectedUsersEmail)
    // console.log(this.userList)
    this.project.users = this.selectedUsersEmail
  //  console.log(this.project)
  //   console.log("API call going to trigger")
    this.projectservice.addproject(this.project).subscribe(()=>{
      console.log(this.project);
    

    alert("Add successfully");
    //sessionStorage.setItem("token" , "logedIn")
    //this.router.navigate(['/dashboard']);
  },error=>alert("Please enter correct details"));
}






}


