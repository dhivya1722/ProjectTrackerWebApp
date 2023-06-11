import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  constructor(private projectservice:ProjectService,private auth:AuthService, private router : Router ){}

  getUserCount(userEmails :string[]) : number {
    return userEmails.length
  }

  openProjectDetailPage(project : Project){
    console.log(project);
    // // this.router.navigate(['/displayprojectlist',JSON.stringify(project)]);
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     projectName: project.projectname,
    //     startDate: project.startdate,
    //     endDate: project.enddate,
    //     userCount: project.getUserCount()
    //   }
    // };

    // this.router.navigate(['displayprojectlist'], navigationExtras);
    const projectName = project.projectname
    this.router.navigate(['/displayprojectlist' , projectName])
  }
 

  ngOnInit(): void {

    if (!this.auth.canAccessAdminPage()){
      this.auth.showProjectList();
     }
   
    this.projectservice.getAllProject(new Project).subscribe((data:any)=>{
      console.log(data)
      this.projectList=data;

    })
  }
}
