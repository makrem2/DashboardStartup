import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  OneUserData: any = [];
  userId: any;
  images: any;
  messageSuccess: any;
  messageError: any;
  messageSuccessprofile: any;
  messageErrorprofile: any;
  constructor(
    private DataServiceAdminService: DataServiceAdminService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('tokenid');
    this.DataServiceAdminService.GetUserById(this.userId).subscribe(
      (data) => (this.OneUserData = data)
    );
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.images = photo;
    }
  }

  updatephoto() {
    let body = new FormData();
    body.append('file', this.images);
    this.DataServiceAdminService.ModifierPhoto(this.userId, body).subscribe(
      (response) => {
        this.ngOnInit();
        this.messageSuccess = response;
        this.notifyService.showSuccess(this.messageSuccess.message,'Success')
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        this.notifyService.showError(this.messageError.message,'Error')
      }
    );
  }
  UpdateProfile(up: any) {
    let data = up.value;
    this.DataServiceAdminService.ModifierProfil(this.userId, data).subscribe(
      (response) => {
        this.ngOnInit();
        this.messageSuccessprofile = response;
        this.notifyService.showSuccess(this.messageSuccessprofile.message,'Success')
      },
      (err: HttpErrorResponse) => {
        this.messageErrorprofile = err;
        this.notifyService.showError(this.messageErrorprofile.message,'Error')
      }
    );
  }
}
