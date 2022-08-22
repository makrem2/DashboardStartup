import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  // role='ROLE_Formateur'
  p: number = 1;
  searchText: any;
  imagePath: any;
  IdUserToDelete: any;
  messagesuccessAdmin: any;
  messageerrorAdmin: any;
  constructor(private DataServiceAdminService: DataServiceAdminService,
    private notifyService: NotificationService) {}

  ngOnInit(): void {
    this.DataServiceAdminService.GetAllUsers().subscribe(
      (data) => (this.DataFormateur = data)
    );
    this.DataServiceAdminService.GetAllFormationCategorie().subscribe(data=>this.DataFormationCategorie=data)
  }

  RestMessage(){

    this.messagesuccessAdmin=''
    this.messageerrorAdmin=''

  }

  addAdmin(admin: any) {
    
    let data = admin.value;

    //console.log(data)
    
    this.DataServiceAdminService.AddAdmin(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message,'Success');
        admin.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message,'Error');
      }
    );
  }

  addFormateur(formateur: any) {
    let data = formateur.value;

    //console.log(data)
    this.DataServiceAdminService.AddFormateur(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message,'Success');
        formateur.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message,'Error');
      }
    );
  }

  addEtudiant(etudiant: any) {
    let data = etudiant.value;

    //console.log(data)
    this.DataServiceAdminService.AddEtudiant(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message,'Success');
        etudiant.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message,'Error');
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
        this.notifyService.showSuccess(this.messagesuccessAdmin.message,'Success');
        this.ngOnInit();
        
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message,'Error');
      }
    );
  }
}
