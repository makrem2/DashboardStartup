import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestion-message',
  templateUrl: './gestion-message.component.html',
  styleUrls: ['./gestion-message.component.css'],
})
export class GestionMessageComponent implements OnInit {
  DataMessages: any = [];
  IdMessage: any;
  messagealert: any;
  constructor(
    private dataadminservice: DataServiceAdminService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.dataadminservice
      .GetAllMessage()
      .subscribe((data) => (this.DataMessages = data));
  }

  GetIdMessageToDelete(id: any) {
    this.IdMessage = id;
    //console.log(this.idFormationToDelete)
  }

  DeleteMessage() {
    this.dataadminservice.DeleteMessage(this.IdMessage).subscribe(
      (response) => {
        this.messagealert = response;
        this.notifyService.showSuccess(this.messagealert.message, 'Success');
        this.ngOnInit();
      },
      (err: HttpErrorResponse) => {
        this.messagealert = err.error;
        this.notifyService.showError(this.messagealert.message, 'Error');
        this.ngOnInit();
      }
    );
  }
}
