import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
})
export class CoursedetailsComponent implements OnInit {
  searchText: any;
  p: number = 1;
  id: any;
  userid: any;
  CourseDetail: any = [];
  pdff: any;
  pdf: any;
  devoirid: any;
  messageSuccessDevoir: any;
  messageErrDevoir: any;
  depotdevoir: any;
  quiz: boolean = false;
  notequiz: any;
  scorequiz: any;
  countNote = {
    idUser: 0,
    chapiterid: 0,
  };
  CountListQuiz: any;

  closeSub: Subscription | undefined;
  spinnner: boolean = false;

  constructor(
    private Activatedroute: ActivatedRoute,
    private dataSerivce: DataServiceFormateurService,
    private authadmin: AuthAdminService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  GetPdfFile(pdf: any) {
    this.pdff = pdf;

    var blob = new Blob([this._base64ToArrayBuffer(this.pdff)], {
      type: 'application/pdf',
    });

    const url = URL.createObjectURL(blob);

    this.pdff = window.open(url);
  }

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
    this.id =this.Activatedroute.snapshot.queryParamMap.get('FormationId') || 0;
    this.userid = this.authadmin.getUserid();
    this.dataSerivce.listChapiterparFormation(this.id).subscribe((data) => {
      this.spinnner = true;
      this.CourseDetail = data;
    });
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const pdf = event.target.files[0];
      this.pdf = pdf;
    }
  }

  RestMessage() {
    this.messageSuccessDevoir = '';
    this.messageErrDevoir = '';
  }

  GetDevoirId(devoirid: any) {
    this.devoirid = devoirid;
    this.spinnner = true;
    this.dataSerivce.countdepotdevoir(this.userid, this.devoirid).subscribe(
      (data) => {
        this.depotdevoir = data;
        this.spinnner = false;
        if (this.depotdevoir >= 1) {
          this.notifyService.showError('vous avez depose ce devoir', 'Error');
          this.spinnner = false;
        }
      },
      (err: HttpErrorResponse) => {}
    );
  }

  DepotDevoir(dd: any) {
    this.spinnner = true;
    this.dataSerivce.countdepotdevoir(this.userid, this.devoirid).subscribe(
      (data) => {
        this.depotdevoir = data;

        if (this.depotdevoir >= 1) {
          this.notifyService.showError('vous avez depose ce devoir', 'Error');
          this.spinnner = false;
        } else {
          const Data = new FormData();
          Data.append('file', this.pdf);
          Data.append('idEtudiant', this.userid);
          Data.append('idDevoir', this.devoirid);
          this.dataSerivce.DepotDevoir(Data).subscribe(
            (data) => {
              this.ngOnInit();
              this.messageSuccessDevoir = data;
              this.notifyService.showSuccess(
                this.messageSuccessDevoir.message,
                'Success'
              );
              dd.resetForm();
              this.spinnner = false;
            },
            (err: HttpErrorResponse) => {
              this.messageErrDevoir = err.error;
              this.notifyService.showError(
                this.messageErrDevoir.message,
                'Error'
              );
              this.spinnner = false;
            }
          );
        }
      },
      (err: HttpErrorResponse) => {
        this.messageErrDevoir = err.error;
        this.notifyService.showError(this.messageErrDevoir.message, 'Error');
        this.spinnner = false;
      }
    );
  }

  StartQuiz(quizid: any) {
    this.spinnner = true;
    this.dataSerivce.CountListQuiz(quizid).subscribe(
      (data) => {
        this.CountListQuiz = data;
        if (this.CountListQuiz > 0) {
          this.dataSerivce.CountNote(this.userid, quizid).subscribe((data) => {
            this.notequiz = data;
            //console.log(this.notequiz);
            if (this.notequiz >= 1) {
              this.quiz = true;
              this.notifyService.showError('vous avez passé ce quiz', 'Error');
              this.spinnner = false;
            } else {
              this.scorequiz = 0;
              const Data = new FormData();

              Data.append('score', this.scorequiz);
              Data.append('userid', this.userid);
              Data.append('chapiterId', quizid);
              this.spinnner = false;
              this.dataSerivce.AddQuizNote(Data).subscribe(
                (data) => {
                  this.ngOnInit();
                  this.spinnner = false;
                  this.router.navigate(['etudiant/quiz'], {
                    queryParams: { Quiz: quizid },
                  });
                },
                (err: HttpErrorResponse) => {}
              );
            }
          });
        } else {
          this.spinnner = false;
          this.notifyService.showError('Quiz et vide', 'Error');
        }
      },
      (err: HttpErrorResponse) => {
        this.spinnner = false;
      }
    );
  }
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
