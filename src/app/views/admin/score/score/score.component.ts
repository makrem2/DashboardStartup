import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  p: number = 1;
  searchText: any;
  DataMoyenne: any = [];
  scoreID: any;
  messageSuccess: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(
    private serviceadmin: DataServiceAdminService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.GetALLMoyenne();
  }


  GetALLMoyenne() {
    this.serviceadmin
      .GetALLMoyenne()
      .subscribe((data) => {
        this.spinnner = true;
        this.DataMoyenne = data
      });
  }

  SupprimerScore() {
    this.spinnner = true;
    this.serviceadmin.DeleteScore(this.scoreID).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        this.spinnner = false;
        this.notifyService.showError(err.error.message, 'Error');
      }
    );
  }

  GetIDScore(idscore: any) {
    this.scoreID = idscore;
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
