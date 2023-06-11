import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/project';
import { Projectwithstatus } from 'src/app/projectwithstatus';

@Component({
  selector: 'app-userprojectlist',
  templateUrl: './userprojectlist.component.html',
  styleUrls: ['./userprojectlist.component.css']
})
export class UserprojectlistComponent implements OnInit {
  projectList: Projectwithstatus[] = [];
  

  userEmail = sessionStorage.getItem('userEmail'); //!); //sessionStorage.getItem('userEmail');

  constructor(private projectservice:ProjectService,private auth:AuthService, private router : Router ){}

  getUserCount(userEmails :string[]) : number {
    return userEmails.length
  }

  openProjectDetailPage(project : Projectwithstatus){
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

  statusChanged(project : Projectwithstatus , newstatus : string) {
    console.log(newstatus)
  }

  getStatusFromStatusCode(code : number) : string {
    if (code == 0){
      return "Open"
    }else{
      return "Completed"
    }
  }

  getStatusforIndex(index : number , statuscode : number):string{
    if (index == 0) {
      return this.getStatusFromStatusCode(statuscode)
    }else{
      if (statuscode == 0){
        return this.getStatusFromStatusCode(1)
      }else{
        return this.getStatusFromStatusCode(0)
      }
    }
  }

  ngOnInit(): void {

    if (!this.auth.canAccessUserPage()){
      this.auth.showProjectList();
     }
    const email = this.userEmail !== null ? this.userEmail! : ' '
    this.projectservice.getProjectForUser(email).subscribe((data:any)=>{
      console.log(data)
      this.projectList=data;  
    })
  }
}
