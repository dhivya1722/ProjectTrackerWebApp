import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private auth:AuthService,private http:HttpClient,private router:Router) { }
  
  ngOnInit(): void {
   if (!this.auth.canAccessUserPage()){
    this.auth.showDashboard();
   }
   
  }

  logout(){
    this.auth.logOut();
  }
}
