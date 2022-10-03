import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestionforum',
  templateUrl: './gestionforum.component.html',
  styleUrls: ['./gestionforum.component.css'],
})
export class GestionforumComponent implements OnInit {

  searchText: any;
  p: number = 1;
  preply: number = 1;
  dataQuestion: any = [];
  new_reply_text: any;
  messageSuccessPoser: any;
  messageSuccessReply: any
  messageErrorReply: any
  messageErrorPoser: any;
  userID: any;
  QuestionId: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private DataService: DataServiceFormateurService,
    private notifyService: NotificationService) {
    this.userID = localStorage.getItem('tokenid');
  }

  ngOnInit(): void {
    this.getAllForumQuestions();
  }

  getAllForumQuestions() {
    this.DataService.getAllForumQuestions().subscribe(
      (data) => {
        this.dataQuestion = data

        this.spinnner = true;
      }
    );
  }


  ResetMessage() {
    this.messageSuccessPoser = ''
    this.messageSuccessReply = ''
    this.messageErrorReply = ''
    this.messageErrorPoser = ''
  }


  Poser(p: any) {
    this.spinnner = true;
    let data = new FormData();

    data.append('topic', p.value.topic);
    data.append('content', p.value.content);
    data.append('timestamp', this.getCurrentTime());
    data.append('iduser', this.userID);

    this.DataService.postQuestion(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessPoser = 'Question enregistré avec succès:';
        this.notifyService.showSuccess(this.messageSuccessPoser, 'Success')
        p.resetForm();
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageErrorPoser = "'Impossible d'enregistré la Question'";
        this.notifyService.showError(this.messageErrorPoser, 'Error')
        this.spinnner = false;
      }
    );
  }

  GetQuestionId(id: any) {
    this.spinnner = true;
    this.QuestionId = id;
  }

  Reply(r: any) {
    this.spinnner = true;
    let data = new FormData();

    data.append('content', r.value.contentReply);
    data.append('timestamp', this.getCurrentTime());
    data.append('iduser', this.userID);
    data.append('IdQuestion', this.QuestionId);

    this.DataService.postReply(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessReply = 'Réponse enregistré avec succès:';
        this.notifyService.showSuccess(this.messageSuccessReply, 'Success')
        r.resetForm();
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.spinnner = false;
        this.messageErrorReply = "'Impossible d'enregistré la Réponse'";
        this.notifyService.showError(this.messageErrorReply, 'Error')
      }
    );
  }

  getCurrentTime(): string {
    let minute: string = new Date().getMinutes().toString();
    if (+minute < 10) {
      minute = '0' + minute;
    }
    let hour: string = new Date().getHours().toString();
    if (+hour < 10) {
      hour = '0' + hour;
    }
    return hour + ':' + minute;
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}