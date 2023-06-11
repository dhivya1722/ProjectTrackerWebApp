import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  


  constructor(private auth:AuthService,private http:HttpClient,private router:Router) { }
  
  ngOnInit(): void {
   if (!this.auth.canAccessAdminPage()){
    this.auth.showDashboard();
   }
  }

  logout(){
    this.auth.logOut();
   }


  

}