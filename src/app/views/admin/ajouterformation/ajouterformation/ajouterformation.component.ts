import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-ajouterformation',
  templateUrl: './ajouterformation.component.html',
  styleUrls: ['./ajouterformation.component.css']
})
export class AjouterformationComponent implements OnInit {
  p: number = 1;
  DataFormation: any = [];
  DataFormationCategorie: any = [];
  DataUser: any = [];
  idFormationToDelete: any;
  messageSuccess: any;
  messageError: any;
  photo: any;
  role: any;
  searchText: any;
  closeSub: Subscription | undefined;
  constructor(private DsAdmin: DataServiceAdminService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.onload();
  }


  onload() {
    this.role = 'ROLE_Etudiant';

    this.closeSub = this.DsAdmin.GetAllEtudiant(this.role).subscribe(
      (data) => { this.DataUser = data }
    );

    this.closeSub = this.DsAdmin.GetAllFormationCategorie().subscribe(
      (data) => { this.DataFormationCategorie = data
      
      }
    );

    this.closeSub = this.DsAdmin.GetAllFormation().subscribe(
      (data) => { this.DataFormation = data 
      
      }
    );
  }


  RestMessage() {
    this.messageSuccess = '';
    this.messageError = '';
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.photo = photo;
    }
  }

  AddFormation(f: any) {
    let data = new FormData();
    data.append('photo', this.photo);
    data.append('intitule', f.value.intitule);
    data.append('titre', f.value.titre);
    data.append('idcategorie', f.value.categorie);
    data.append('Description', f.value.Description);
    data.append('tags', f.value.tags);
    this.closeSub = this.DsAdmin.AjouterFormation(data).subscribe(
      (response) => {
        this.ngOnInit();
        this.messageSuccess = response;
        this.notifyService.showSuccess(this.messageSuccess.message, 'Success')
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        this.notifyService.showError(this.messageError.message, 'Error')
      }
    );
  }

  Affecter(f: any) {
    let data = new FormData();
    data.append('FormationId', f.value.formation);

    this.closeSub= this.DsAdmin.affecterEtudiantAFormation(f.value.etudiant, data).subscribe(
      (response) => {
        this.ngOnInit();
        this.messageSuccess = response;
        this.notifyService.showSuccess(this.messageSuccess.message, 'Success')
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        this.notifyService.showError(this.messageError.message, 'Error')
      }
    );
  }

  AddFormationCategorie(c: any) {
    let data = new FormData();
    data.append('name', c.value.name);

     this.closeSub =  this.DsAdmin.AjouterFormationCategorie(data).subscribe(
      (response) => {
        this.ngOnInit();
        this.messageSuccess = response;
        this.notifyService.showSuccess(this.messageSuccess.message, 'Success')
        c.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        this.notifyService.showError(this.messageError.message, 'Error')
      }
    );
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
