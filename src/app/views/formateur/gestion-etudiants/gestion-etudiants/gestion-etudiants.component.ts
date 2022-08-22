import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestion-etudiants',
  templateUrl: './gestion-etudiants.component.html',
  styleUrls: ['./gestion-etudiants.component.css'],
})
export class GestionEtudiantsComponent implements OnInit {
  p: number = 1;
  searchText: any;
  dataEtudiant: any = [];
  specialite: any;
  userId: any;
  message: any;
  dataDevoir: any = [];
  messageSuccess: any;
  messageErr: any;
  EtudiantId: any;
  // stringspec?: string;

  datanote = {
    iduser: 0,
    iddevoir: 0,
    note: '',
    remarque: '',
  };

  constructor(private dataFormateur: DataServiceFormateurService,
    private notifyService: NotificationService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('tokenid');
    this.dataFormateur.GetUserSpecialite(this.userId).subscribe(
      (data) => {},
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.specialite = err.error.text;

        console.log(this.specialite);
        this.dataFormateur
          .GetAllEtudiants(this.specialite)
          .subscribe((data) => (this.dataEtudiant = data));
        // var string = JSON.stringify(this.stringspec);
      }
    );

    this.dataFormateur
      .findDevoirparFormateur(this.userId)
      .subscribe((data) => (this.dataDevoir = data));
  }

  // GetEtudiantId(id: any) {
  //   this.EtudiantId = id;
  // }

  // DonnerNotePourEtudiant(DN: any) {
  //   let data = new FormData();
  //   data.append('iduser', this.EtudiantId);
  //   data.append('iddevoir', DN.value.iddevoir);
  //   data.append('note', DN.value.Note);
  //   data.append('remarque', DN.value.remarque);

  //   this.dataFormateur.AddNote(data).subscribe(
  //     (data) => {
  //       this.ngOnInit();
  //       this.messageSuccess = data;
  //       DN.resetForm();
  //     },
  //     (err: HttpErrorResponse) => {
  //       //console.log(err.error)
  //       this.messageErr = err;
  //     }
  //   );
  // }
}
