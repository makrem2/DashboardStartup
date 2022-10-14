import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.css'],
})
export class GestionutilisateurComponent implements OnInit {
  DataFormateur: any = [];
  p: number = 1;
  searchText: any;
  IdUserToDelete: any;
  messagesuccessAdmin: any;
  messageerrorAdmin: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(
    private DataServiceAdminService: DataServiceAdminService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.onload();
  }

  onload() {
    this.closeSub = this.DataServiceAdminService.GetAllUsers().subscribe(
      (data) => {
        this.DataFormateur = data;
        this.spinnner = true;
      }
    );
  }

  GetIdUserToDelete(id: any) {
    this.IdUserToDelete = id;
  }

  DeleteUser() {
    this.closeSub = this.DataServiceAdminService.DeleteUser(
      this.IdUserToDelete
    ).subscribe(
      (response) => {
        this.messagesuccessAdmin = response;
        this.notifyService.showSuccess(
          this.messagesuccessAdmin.message,
          'Success'
        );
        this.ngOnInit();
        this.spinnner = true;
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
        this.spinnner = true;
      }
    );
  }
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
