import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(
    private dataAdmin: DataServiceAdminService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.GetAllSession();
  }

  GetAllSession() {

    this.dataAdmin
      .GetAllSession()
      .subscribe((data) => {
        this.sessionData = data
        this.spinnner = true;
      });
  }

  DeleteSession(id: any) {
    this.spinnner = true;
    this.dataAdmin.deleteSession(id).subscribe(
      (response) => {
        this.notifyService.showError('Session not found!', 'Error');
        this.ngOnInit();
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        this.notifyService.showSuccess(
          'Session Removed Successfully',
          'Success'
        );
        this.ngOnInit();
        this.spinnner = false;
      }
    );
  }
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
