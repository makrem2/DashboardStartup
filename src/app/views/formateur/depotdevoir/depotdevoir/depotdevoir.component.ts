import { Component, OnInit } from '@angular/core';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-depotdevoir',
  templateUrl: './depotdevoir.component.html',
  styleUrls: ['./depotdevoir.component.css'],
})
export class DepotdevoirComponent implements OnInit {
  p: number = 1;
  searchText: any;
  DataDepotDevoir: any = [];
  id: any;
  base64Data: any;
  messageSuccess: any;
  messageErr: any;
  EtudiantId: any;
  DevoirId: any;
  dataDevoir: any = [];
  ListFormation: any = [];

  dataMoyenne = {
    idFormation: 0,
  };

  dataNote = {
    remarque: '',
  };

  countNoteEtudiant: any;

  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(
    private dataFormateur: DataServiceFormateurService,
    private sanitizer: DomSanitizer,
    private DataSericeAdmin: DataServiceAdminService,
    private notifyService: NotificationService
  ) { }

  _base64ToArrayBuffer(base64: any) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  ngOnInit(): void {
      this.onLoad();
  }

  onLoad() {
    this.DataSericeAdmin.GetAllFormation().subscribe(
      (data) => (this.ListFormation = data)
    );

    this.id = localStorage.getItem('tokenid');
    this.dataFormateur
      .findDepotDevoirparFormateur(this.id)
      .subscribe((data) => (this.DataDepotDevoir = data));

    this.dataFormateur
      .findDevoirparFormateur(this.id)
      .subscribe((data) => (this.dataDevoir = data));

      this.spinnner=true;
  }

  GetPdfFile(pdf: any) {
    var blob = new Blob([this._base64ToArrayBuffer(pdf)], {
      type: 'application/pdf',
    });

    const url = URL.createObjectURL(blob);

    pdf = window.open(url);
  }

  GetDevoirId(iddevoir: number, EtudiantId: number) {
    this.EtudiantId = EtudiantId;
    this.DevoirId = iddevoir;
  }

  DonnerNotePourEtudiant(DN: any) {
    let NoteEtudiant = new FormData();
    NoteEtudiant.append('iduser', this.EtudiantId);
    NoteEtudiant.append('iddevoir', DN.value.iddevoir);
    NoteEtudiant.append('note', DN.value.Note);
    NoteEtudiant.append('remarque', DN.value.remarque);
    this.dataNote.remarque = DN.value.remarque;

    let dataMoyenne = new FormData();
    dataMoyenne.append('idFormation', DN.value.idFormation);

    this.dataFormateur
      .countNoteDevoir(this.EtudiantId, DN.value.iddevoir)
      .subscribe(
        (data) => {
          this.countNoteEtudiant = data;
          if (this.countNoteEtudiant >= 1) {
            this.notifyService.showError(
              'vous avez déjà noté cet étudiant',
              'Error'
            );
          } else {
            this.dataFormateur.AddNote(NoteEtudiant).subscribe(
              (data) => {
                this.ngOnInit();
                this.messageSuccess = data;
                this.notifyService.showSuccess(this.messageSuccess.message, 'Success');
                DN.resetForm();
                this.DataSericeAdmin.EtudiantMoyenne(
                  this.EtudiantId,
                  dataMoyenne
                ).subscribe(
                  (data) => {
                    this.ngOnInit();
                    DN.resetForm();
                  },
                  (err: HttpErrorResponse) => {
                    this.messageErr = err.error;
                    this.notifyService.showError(this.messageErr.message, 'Error');
                  }
                );
              },
              (err: HttpErrorResponse) => {
                //console.log(err.error)
                this.messageErr = err;
                this.notifyService.showError(this.messageErr.message, 'Error');
              }
            );
          }
        },
        (err: HttpErrorResponse) => {
          //console.log(err.error)
          this.messageErr = err;
          this.notifyService.showError(this.messageErr.message, 'Error');
        }
      );
  }
}
