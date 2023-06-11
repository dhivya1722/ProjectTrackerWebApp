import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent  {
  projectList: Project[] = [];
  

  userEmail = sessionStorage.getItem('userEmail'); //!); //sessionStorage.getItem('userEmail');

  constructor(private projectservice:ProjectService,private auth:AuthService){}

  getUserCount(userEmails :string[]) : number {
    return userEmails.length
  }
 

  ngOnInit(): void {
   
    if (this.auth.isAdmin()){
      this.projectservice.getAllProject(new Project).subscribe((data:any)=>{
        console.log(data)
        this.projectList=data;
  
      })
    }else {
      const email = this.userEmail !== null ? this.userEmail! : ' '
      this.projectservice.getProjectForUser(email).subscribe((data:any)=>{
        console.log(data)
        this.projectList=data;
  
      }
      )
    }
  }
}
