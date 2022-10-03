import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-gestion-formations',
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css'],
})
export class GestionFormationsComponent implements OnInit {
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

  UpDataFormation = {
    id: 0,
    description: '',
    intitule: '',
    tags: '',
    titre: '',
    categorie_id: 0,
  };
  ModfierCategorie: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private DsAdmin: DataServiceAdminService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.onload();
  }

  onload() {
    this.role = 'ROLE_Etudiant';
    this.DsAdmin.GetAllFormation().subscribe(
      (data) => { this.DataFormation = data 
      this.spinnner=true
      
      }
    );
    this.DsAdmin.GetAllEtudiant(this.role).subscribe(
      (data) => { this.DataUser = data }
    );

    this.DsAdmin.GetAllFormationCategorie().subscribe(
      (data) => { this.DataFormationCategorie = data }
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

  GetIdFormationToDelete(id: any) {
    this.idFormationToDelete = id;
    //console.log(this.idFormationToDelete)
  }

  AddFormation(f: any) {
    let data = new FormData();
    data.append('photo', this.photo);
    data.append('intitule', f.value.intitule);
    data.append('titre', f.value.titre);
    data.append('idcategorie', f.value.categorie);
    data.append('Description', f.value.Description);
    data.append('tags', f.value.tags);
    this.DsAdmin.AjouterFormation(data).subscribe(
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

  DeleteFormation() {
    this.DsAdmin.DeleteFormation(this.idFormationToDelete).subscribe(
      (response) => {
        this.messageSuccess = response;
        this.notifyService.showSuccess(this.messageSuccess.message, 'Success')
        this.ngOnInit();
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        this.notifyService.showError(this.messageError.message, 'Error')
      }
    );
  }

  Affecter(f: any) {
    console.log(f.value);

    let data = new FormData();
    data.append('FormationId', f.value.formation);

    this.DsAdmin.affecterEtudiantAFormation(f.value.etudiant, data).subscribe(
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

    this.DsAdmin.AjouterFormationCategorie(data).subscribe(
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

  GetdataFormation(
    id: any,
    description: any,
    intitule: any,
    tags: any,
    titre: any,
    categorie_id: any
  ) {
    this.UpDataFormation.id = id;
    this.UpDataFormation.description = description;
    this.UpDataFormation.intitule = intitule;
    this.UpDataFormation.tags = tags;
    this.UpDataFormation.titre = titre;
    this.UpDataFormation.categorie_id = categorie_id;

    this.ModfierCategorie = this.UpDataFormation.categorie_id;
  }

  UpdateFormation(f: any) {
    let data = new FormData();
    data.append('intitule', f.value.intitule);
    data.append('titre', f.value.titre);
    data.append('idcategorie', f.value.categorie);
    data.append('Description', f.value.Description);
    data.append('tags', f.value.tags);
    this.DsAdmin.UpdateFormation(data, this.UpDataFormation.id).subscribe(
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
}
