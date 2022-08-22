import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-formateur-layout',
  templateUrl: './formateur-layout.component.html',
  styleUrls: ['./formateur-layout.component.css']
})
export class FormateurLayoutComponent implements OnInit {
  username:any
  userId:any
  Datauser:any=[]
  messagesuccess:any
  messageerror:any
  constructor(private authadmin:AuthAdminService,private route:Router,
    private DataServiceAdminService:DataServiceAdminService,
    private dataFormateur:DataServiceFormateurService,
    private notifyService: NotificationService) { 
      this.username = this.Datauser.username
      this.userId=localStorage.getItem('tokenid')
  }

  ngOnInit(): void {
    this.DataServiceAdminService.GetUserById(this.userId).subscribe(data=>
      this.Datauser=data)
  }

  Lougout(){
    this.authadmin.Lougout();
    this.route.navigate(['/'])
  }

  
  RestMessage(){
    this.messagesuccess=''
    this.messageerror=''
  }

  Contact(f:any){
    let data = new FormData();
    data.append('objet', f.value.objet);
    data.append('contenu', f.value.contenu);
    data.append('idUser', this.userId);
    this.dataFormateur.AddMessage(data).subscribe(
      (data) => {
        this.messagesuccess = data;
        this.notifyService.showSuccess(this.messagesuccess.message,'Success')
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        // this.messageerror = err.error;
        this.notifyService.showError(this.messageerror.message,'Error')
      }
    );

  }

}
