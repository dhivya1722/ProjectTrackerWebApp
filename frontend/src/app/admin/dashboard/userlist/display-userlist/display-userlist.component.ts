import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Projectwithstatus } from 'src/app/projectwithstatus';
import { Userwithstatus } from 'src/app/userwithstatus';

@Component({
  selector: 'app-display-userlist',
  templateUrl: './display-userlist.component.html',
  styleUrls: ['./display-userlist.component.css']
})
export class DisplayUserlistComponent implements OnInit{


  
   projectList: Projectwithstatus[] = [];
  
  //  project : Project

   userEmail : string = "email"
   userName : string = "name"

  constructor(private route: ActivatedRoute , private projectservice:ProjectService , private auth:AuthService , private router: Router) {
      
  }
  ngOnInit(): void {
    // const projectName  = this.project.projectname;
    this.userEmail = this.route.snapshot.params['userEmail'];
    // this.userName = this.route.snapshot.params['userName'];
    // console.log(this.userEmail);


    this.projectservice.getProjectForUser(this.userEmail).subscribe((data:any)=>{
        console.log(data)
        this.projectList=data;
      })

  }

  getUserCount(userEmails :string[]) : number {
    return userEmails.length
  }


  getStatusFor(user : Projectwithstatus):string {
   //return user.getStatusStr()
   if (user.status == 0) {
    return 'Open'
  }else if (user.status == 1){
    return 'Closed'
  }else if (user.status == 2){
    return 'In Progress'
  }else{
   return '-----'
  } 
  //  return "open";
  }

}
