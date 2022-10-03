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
  DataFormateur: any = []
  DataFormationCategorie: any = []
  p: number = 1;
  searchText: any;
  imagePath: any;
  IdUserToDelete: any;
  messagesuccessAdmin: any;
  messageerrorAdmin: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private DataServiceAdminService: DataServiceAdminService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.onload();
  }

  onload() {
    this.DataServiceAdminService.GetAllUsers().subscribe(
      (data) => {
        this.DataFormateur = data
        this.spinnner = true;
      }
    );
    this.DataServiceAdminService.GetAllFormationCategorie().subscribe((data) => {

      this.DataFormationCategorie = data
    })
  }

  RestMessage() {

    this.messagesuccessAdmin = ''
    this.messageerrorAdmin = ''

  }

  addAdmin(admin: any) {
    let data = admin.value;
    this.DataServiceAdminService.AddAdmin(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        admin.resetForm();
        this.spinnner = true;
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.spinnner = true;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
      }
    );
  }

  addFormateur(formateur: any) {
    let data = formateur.value;
    this.DataServiceAdminService.AddFormateur(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        formateur.resetForm();
        this.spinnner = true;
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
        this.spinnner = true;
      }
    );
  }

  addEtudiant(etudiant: any) {
    let data = etudiant.value;
    this.DataServiceAdminService.AddEtudiant(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        etudiant.resetForm();
        this.spinnner = true;
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
        this.spinnner = true;
      }
    );
  }

  GetIdUserToDelete(id: any) {
    this.IdUserToDelete = id;
  }

  DeleteUser() {
    this.DataServiceAdminService.DeleteUser(this.IdUserToDelete).subscribe(
      (response) => {
        this.messagesuccessAdmin = response;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
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
