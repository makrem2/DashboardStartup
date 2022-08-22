import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  username:any
  userId:any
  Datauser:any=[]
  constructor(private authadmin:AuthAdminService,private route:Router,
    private DataServiceAdminService:DataServiceAdminService) { 
    this.username = this.Datauser.username
      this.userId=localStorage.getItem('tokenid')
      //console.log(this.authadmin.getToken())
    // console.log(this.username)
    // console.log(this.role)
  }

  ngOnInit(): void {
    this.DataServiceAdminService.GetUserById(this.userId).subscribe(data=>
      this.Datauser=data)
  }

  Lougout(){

    this.authadmin.Lougout();
    this.route.navigate(['/'])
  }

}
