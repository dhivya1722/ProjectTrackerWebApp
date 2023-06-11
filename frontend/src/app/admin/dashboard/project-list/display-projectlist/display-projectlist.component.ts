import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Userwithstatus } from 'src/app/userwithstatus';

@Component({
  selector: 'app-display-projectlist',
  templateUrl: './display-projectlist.component.html',
  styleUrls: ['./display-projectlist.component.css']
})
export class DisplayProjectlistComponent implements OnInit {

   userList: Userwithstatus[] = [];
  
  //  project : Project

   projectName : string = "ProjectName"

  constructor(private route: ActivatedRoute , private projectservice:ProjectService , private auth:AuthService , private router: Router) {
      
  }
  ngOnInit(): void {
    // const projectName  = this.project.projectname;
    this.projectName = this.route.snapshot.params['projectName'];
    console.log(this.projectName);


    this.projectservice.getUserForProject(this.projectName).subscribe((data:any)=>{
        console.log(data)
        this.userList=data;
  
      })

  }


  getStatusFor(user : Userwithstatus):string {
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
