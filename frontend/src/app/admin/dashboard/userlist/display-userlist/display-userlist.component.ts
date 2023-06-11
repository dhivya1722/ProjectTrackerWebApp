import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/project';
import { SignupData } from 'src/app/signup-data';

@Component({
  selector: 'app-display-userlist',
  templateUrl: './display-userlist.component.html',
  styleUrls: ['./display-userlist.component.css']
})
export class DisplayUserlistComponent implements OnInit{


  signupdata:SignupData=new SignupData()
  project:Project=new Project()
  projectlist: any;
  
  




  constructor(private projectservice:ProjectService){}









  ngOnInit(): void {
   
  }
}
