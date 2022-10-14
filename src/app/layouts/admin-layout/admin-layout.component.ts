import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  username:any
  userId:any
  Datauser:any=[]
  closeSub: Subscription | undefined;
  constructor(private authadmin:AuthAdminService,private route:Router,
    private DataServiceAdminService:DataServiceAdminService) { 

  }

  ngOnInit(): void {

    this.username = this.Datauser.username
      this.userId=localStorage.getItem('tokenid')
      this.closeSub =  this.DataServiceAdminService.GetUserById(this.userId).subscribe(data=>
      this.Datauser=data)
  }

  Lougout(){

    this.authadmin.Lougout();
    this.route.navigate(['/'])
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
