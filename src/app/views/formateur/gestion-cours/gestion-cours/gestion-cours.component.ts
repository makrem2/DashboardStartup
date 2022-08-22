import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrls: ['./gestion-cours.component.css'],
})
export class GestionCoursComponent implements OnInit {
  searchText: any;
  p: number = 1;
  userid: any;
  ListCourse: any = [];
  title = 'sampleapp';
  pdff: any;
  pdf: any;
  chapiterId: any;
  devoirid: any;
  ListFormation: any = [];
  public page = 2;
  base64Data: any;
  public pageLabel!: string;
  ChapiterData = {
    id: 0,
    chapitername: '',
    desc: '',
  };
  CourseData = {
    courseid: '',
    title: '',
    description: '',
    vedio_link: '',
  };
  DevoirData = {
    devoirid: 0,
    title: '',
    description: '',
  };
  messageSuccess: any;
  messageErr: any;
  steps: any = 1;
  code: string = '';
  idQuestion: any;

  DataOption = {
    option_text: '',
    idQuestion: 0,
    correct: 0,
  };

  constructor(
    private DataSericeFormateur: DataServiceFormateurService,
    private authadmin: AuthAdminService,
    private DataSericeAdmin: DataServiceAdminService,
    private sanitizer: DomSanitizer,
    private notifyService: NotificationService
  ) {}

  _base64ToArrayBuffer(base64: any) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const pdf = event.target.files[0];
      this.pdf = pdf;
    }
  }

  ngOnInit(): void {
    this.DataSericeAdmin.GetAllFormation().subscribe(
      (data) => (this.ListFormation = data)
    );
    this.userid = this.authadmin.getUserid();
    //console.log(this.userid);
    this.DataSericeFormateur.listcoursparFormateur(this.userid).subscribe(
      (data) => {
        this.ListCourse = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  GetChapiterId(idchapiter: any) {
    this.chapiterId = idchapiter;
  }

  AjouterCours(c: any) {
    const Data = new FormData();

    Data.append('ChapiterId', this.chapiterId);
    Data.append('title', c.value.title);
    Data.append('desc', c.value.desc);
    Data.append('file', this.pdf);
    Data.append('VedioLink', c.value.VedioLink);
    this.DataSericeFormateur.AddCourse(Data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        c.resetForm();
        //  this.router.navigate(['/admin/gestionformations'])
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');

        //console.log(err.error)
      }
    );
  }

  RestMessage() {
    this.messageSuccess = '';
    this.messageErr = '';
  }

  AjouterChapiter(ch: any) {
    const Data = new FormData();

    Data.append('chapitername', ch.value.chapitername);
    Data.append('Description', ch.value.title);
    Data.append('idFormation', ch.value.idFormation);
    Data.append('idFormateur', this.userid);

    this.DataSericeFormateur.AddChapiter(Data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        ch.resetForm();
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        //  this.router.navigate(['/admin/gestionformations'])
      },
      (err: HttpErrorResponse) => {
        this.messageErr= err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');

        //console.log(err.error)
      }
    );
  }

  GetPdfFile(pdf: any, type: any) {
    this.pdff = pdf;

    var blob = new Blob([this._base64ToArrayBuffer(this.pdff)], {
      type: type,
    });

    const url = URL.createObjectURL(blob);

    this.pdff = window.open(url);
  }

  AjouterDevoir(d: any) {
    const Data = new FormData();
    Data.append('idChapiter', this.chapiterId);
    Data.append('title', d.value.title);
    Data.append('description', d.value.desc);
    Data.append('file', this.pdf);
    Data.append('idFormateur', this.userid);

    this.DataSericeFormateur.AjouterDevoir(Data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        d.resetForm();
        //  this.router.navigate(['/admin/gestionformations'])
      },
      (err: HttpErrorResponse) => {
        this.messageErr= err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');

        //console.log(err.error)
      }
    );
  }

  AjouterQuizQuestion(Ad: any) {
    this.code = new Date().getTime().toString();

    const Data = new FormData();

    Data.append('question_text', Ad.value.question_text);
    Data.append('idChapiter', this.chapiterId);
    Data.append('code', this.code);

    this.DataSericeFormateur.AjouterQuestion(Data).subscribe(
      (data) => {
        this.steps = this.steps + 1;
        this.messageSuccess=data
        localStorage.setItem('code', this.code);
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        Ad.resetForm();
        this.ngOnInit();
      },
      (err: HttpErrorResponse) => {
        localStorage.removeItem('code');
        this.messageErr= err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');
        Ad.resetForm();
        this.ngOnInit();
      }
    );
  }
  AjouterQuizOption(Aqo: any) {
    let i = 0;

    const Data = new FormData();

    Data.append('option_text', Aqo.value.option_text);
    Data.append('correct', Aqo.value.correct);

    this.DataSericeFormateur.listQuiz_QuestionparCode(this.code).subscribe(
      (data) => {
        this.idQuestion = data;

        Data.append('idQuestion', this.idQuestion);

        this.DataSericeFormateur.AjouterOption(Data).subscribe(
          (data) => {
            i++;
            if (i == 4) {
              this.steps = this.steps - 1;
            }
            this.messageSuccess=data
            this.notifyService.showSuccess(
              this.messageSuccess.message,
              'Success'
            );
          },
          (err: HttpErrorResponse) => {
            //console.log(err);
            this.messageErr= err.error;
            this.notifyService.showError(
              this.messageErr.message,
              'Error'
            );
          }
        );
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');
      }
    );
  }

  Return() {
    this.steps = this.steps - 1;
    localStorage.removeItem('code');
  }

  GetChapiterData(idchap: any, chapitername: any, description: any) {
    this.ChapiterData.id = idchap;
    this.ChapiterData.chapitername = chapitername;
    this.ChapiterData.desc = description;
  }

  ModifierSection(MS: any) {
    const Data = new FormData();

    Data.append('chapiterName', MS.value.chapitername);
    Data.append('desc', MS.value.title);

    this.DataSericeFormateur.ModifierSection(
      this.ChapiterData.id,
      Data
    ).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        MS.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');
        //console.log(err.error)
      }
    );
  }

  SupprimerSection() {
    this.DataSericeFormateur.DeleteSection(this.chapiterId).subscribe(
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

  GetDevoirData(devoirid: any, title: any, description: any) {
    this.DevoirData.devoirid = devoirid;
    this.DevoirData.title = title;
    this.DevoirData.description = description;
  }
  GetCoursData(courseid: any, title: any, description: any, vedio_link: any) {
    this.CourseData.courseid = courseid;
    this.CourseData.title = title;
    this.CourseData.description = description;
    this.CourseData.vedio_link = vedio_link;
  }

  ModifierCours(mc: any) {
    const Data = new FormData();

    Data.append('title', mc.value.title);
    Data.append('description', mc.value.desc);
    Data.append('vedio_link', mc.value.VedioLink);
    this.DataSericeFormateur.ModifierCourse(
      this.CourseData.courseid,
      Data
    ).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = data;
        this.notifyService.showSuccess(
          this.messageSuccess.message,
          'Success'
        );
        mc.resetForm();
        //  this.router.navigate(['/admin/gestionformations'])
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        this.notifyService.showError(this.messageErr.message, 'Error');
        //console.log(err.error)
      }
    );
  }

  SupprimerCours() {
    this.DataSericeFormateur.DeleteCourse(this.CourseData.courseid).subscribe(
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

  SupprimerDevoir() {
    this.DataSericeFormateur.DeleteDevoir(this.DevoirData.devoirid).subscribe(
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
}
