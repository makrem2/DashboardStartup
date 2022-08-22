import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(
    private serviceadmin: DataServiceAdminService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.serviceadmin
      .GetALLMoyenne()
      .subscribe((data) => (this.DataMoyenne = data));
  }

  SupprimerScore() {
    this.serviceadmin.DeleteScore(this.scoreID).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
      },
      (err: HttpErrorResponse) => {
        this.notifyService.showError(err.error.message, 'Error');
      }
    );
  }

  GetIDScore(idscore: any) {
    this.scoreID = idscore;
  }
}
