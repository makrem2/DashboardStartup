import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestion-session',
  templateUrl: './gestion-session.component.html',
  styleUrls: ['./gestion-session.component.css'],
})
export class GestionSessionComponent implements OnInit {
  p: number = 1;
  sessionData: any = [];
  constructor(
    private dataAdmin: DataServiceAdminService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.dataAdmin
      .GetAllSession()
      .subscribe((data) => (this.sessionData = data));
  }

  DeleteSession(id: any) {
    this.dataAdmin.deleteSession(id).subscribe(
      (response) => {
        this.notifyService.showError('Session not found!', 'Error');
        this.ngOnInit();
      },
      (err: HttpErrorResponse) => {
        this.notifyService.showSuccess(
          'Session Removed Successfully',
          'Success'
        );
        this.ngOnInit();
      }
    );
    this.ngOnInit();
  }
}
