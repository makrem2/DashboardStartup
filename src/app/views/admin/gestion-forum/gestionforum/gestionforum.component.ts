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
  messageSuccessReply: any;
  messageErrorReply: any;
  messageErrorPoser: any;
  userID: any;
  QuestionId: any;

  qid: any;
  topic: any;
  content: any;

  DataQuestion = {
    qid: 0,
    topic: '',
    content: '',
  };

  DataReply = {
    rid: 0,
    content: '',
  };
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(
    private DataService: DataServiceFormateurService,
    private notifyService: NotificationService
  ) {
    this.userID = localStorage.getItem('tokenid');
  }

  ngOnInit(): void {
    this.getAllForumQuestions();
  }

  getAllForumQuestions() {
    this.DataService.getAllForumQuestions().subscribe(
      (data) => { 
        this.spinnner = true;
        this.dataQuestion = data }
    );
  }

  ResetMessage() {
    this.messageSuccessPoser = '';
    this.messageSuccessReply = '';
    this.messageErrorReply = '';
    this.messageErrorPoser = '';
  }

  Poser(p: any) {
    let data = new FormData();
    this.spinnner = true;
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
        this.spinnner = false;
        this.messageErrorPoser = "'Impossible d'enregistré la Question'";
        this.notifyService.showError(this.messageErrorPoser, 'Error')
      }
    );
  }

  GetQuestionId(id: any) {
    this.QuestionId = id;
  }

  Reply(r: any) {
    let data = new FormData();
    this.spinnner = true;
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

  ModifierQuestion(modif: any) {
    let data = new FormData();
    data.append('topic', modif.value.topic);
    data.append('content', modif.value.content);
    this.spinnner = true;
    this.DataService.ModifierForumPost(data, this.DataQuestion.qid).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessPoser = data;
        this.notifyService.showSuccess(this.messageSuccessPoser.message, 'Success')
        modif.resetForm();
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.spinnner = false;
        this.messageErrorPoser = err.error;
        this.notifyService.showError(this.messageErrorPoser.message, 'Error')
      }
    );
  }

  SupprimerQuestion(qid: any) {
    this.spinnner = true;
    this.DataService.DeleteForumPost(qid).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessPoser = data;
        this.spinnner = false;
        this.notifyService.showSuccess(
          this.messageSuccessPoser.message,
          'Success'
        );
      },
      (err: HttpErrorResponse) => {
        this.spinnner = false;
        this.notifyService.showError(err.error.message, 'Error');
      }
    );
  }

  GetQuestion(qid: any, topic: any, content: any) {
    this.DataQuestion.qid = qid;
    this.DataQuestion.topic = topic;
    this.DataQuestion.content = content;
  }

  GetReply(rid: any, content: any) {
    this.DataReply.rid = rid;
    this.DataReply.content = content;
  }

  ModifierReply(reply: any) {
    this.spinnner = true;
    let data = new FormData();
    data.append('content', reply.value.contentReply);

    this.DataService.ModifierForumReply(data, this.DataReply.rid).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessReply = data;
        this.notifyService.showSuccess(this.messageSuccessReply.message, 'Success')
        reply.resetForm();
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageErrorReply = err.error;
        this.notifyService.showError(this.messageErrorReply.message, 'Error')
        this.spinnner = false;
      }
    );
  }

  SupprimerReply(rid: any) {
    this.spinnner = true;
    this.DataService.DeleteForumReply(rid).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessReply = data;
        this.notifyService.showSuccess(
          this.messageSuccessReply.message,
          'Success'
          
        );
        this.spinnner = false;
      },
      (err: HttpErrorResponse) => {
        this.spinnner = false;
        this.notifyService.showError(err.error.message, 'Error');
      }
    );
  }


  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
